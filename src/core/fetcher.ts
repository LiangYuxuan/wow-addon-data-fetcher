/* eslint @typescript-eslint/no-explicit-any: 0 */

import fs from 'fs';
import path from 'path';
import stream from 'stream';
import util from 'util';

import csv from 'csv-parser';
import fetch from 'node-fetch';

import {StorageFile} from './storage';

const cachePath = path.resolve(__dirname, '..', '..', 'cache');
const storage = new StorageFile(path.resolve(cachePath, 'version.json'));
const pipeline = util.promisify(stream.pipeline);

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
};

const buildCache: Map<string, string | undefined> = new Map();
export const fetchLatestBuild = async (version: string): Promise<string | undefined> => {
    if (buildCache.has(version)) {
        return buildCache.get(version);
    } else if (/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(version)) {
        // exact version
        return version;
    }

    const res = await fetch('https://wow.tools/api.php?type=latestbuilds', {headers: headers});
    if (!res.ok) {
        throw new Error(`unexpected response ${res.statusText}`);
    }

    const builds = await res.json();
    for (const key in builds) {
        if (Object.prototype.hasOwnProperty.call(builds, key)) {
        // if (builds.hasOwnProperty(key)) {
            buildCache.set(key, builds[key]);
        }
    }

    // alias
    buildCache.set('live', buildCache.get('wow'));
    buildCache.set('ptr', buildCache.get('wowt'));
    buildCache.set('beta', buildCache.get('wow_beta'));

    return buildCache.get(version);
};

const pushCache: Map<string, number> = new Map();
export const fetchLatestPush = async (version: string): Promise<number> => {
    if (pushCache.has(version)) {
        return pushCache.get(version) ?? 0;
    }

    const res = await fetch(
        `https://wow.tools/dbc/hotfix_api.php?start=0&length=1&search[value]=${version}`,
        {headers: headers}
    );
    if (!res.ok) {
        throw new Error(`unexpected response ${res.statusText}`);
    }

    const hotfix = await res.json();
    const pushID: number = hotfix.recordsFiltered === 0 ? 0 : hotfix.data[0][0];
    pushCache.set(version, pushID);

    return pushID;
};

const CSVCache: Map<string, any[]> = new Map();
export const fetchDB2: FetchDB2Func = async (db: string, {version = 'ptr', hotfix = false} = {}): Promise<any[]> => {
    if (!/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(version)) {
        const build = await fetchLatestBuild(version);
        if (build === undefined) {
            throw new Error(`failing to fetch version ${version}`);
        }
        version = build;
    }

    const buildID = version.match(/\d+$/)?.[0];
    if (buildID === undefined) {
        throw new Error(`failing to fetch build id of version ${version}`);
    }

    const pushID = hotfix ? await fetchLatestPush(buildID) : 0;
    const filePath = path.resolve(cachePath, `${db}_${buildID}_${pushID}.csv`);

    let buildInfos = storage.get(db);
    if (buildInfos?.get(buildID)?.get(pushID) === undefined) {
        const res = await fetch(
            `https://wow.tools/dbc/api/export/?name=${db}&build=${version}&useHotfixes=${hotfix}`,
            {headers: headers}
        );
        if (!res.ok) {
            throw new Error(`unexpected response ${res.statusText}`);
        }

        if (!fs.existsSync(cachePath)) {
            fs.mkdirSync(cachePath);
        }

        await pipeline(res.body, fs.createWriteStream(filePath));

        if (!buildInfos) {
            buildInfos = new Map();
        }

        let pushInfos = buildInfos.get(buildID);
        if (!pushInfos) {
            pushInfos = new Map();
        }

        pushInfos.set(pushID, true);
        buildInfos.set(buildID, pushInfos);
        storage.set(db, buildInfos);

        storage.set(db, buildInfos);
        storage.save();
    }

    if (CSVCache.has(filePath)) {
        return CSVCache.get(filePath) ?? [];
    }

    return await new Promise((resolve, reject) => {
        const result: any[] = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('error', reject)
            .on('data', (data) => result.push(data))
            .on('end', () => {
                CSVCache.set(filePath, result);

                resolve(result);
            });
    });
};

