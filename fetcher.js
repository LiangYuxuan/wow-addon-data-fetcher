const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const util = require('util');
const fetch = require('node-fetch');

const cache = require('./cache')(path.resolve(__dirname, 'cache', 'version.json'));

const pipeline = util.promisify(stream.pipeline);

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
};

const buildCache = new Map();
const fetchLatestBuild = async (version) => {
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
            buildCache.set(key, builds[key]);
        }
    }

    // alias
    buildCache.set('live', buildCache.get('wow'));
    buildCache.set('ptr', buildCache.get('wowt'));
    buildCache.set('beta', buildCache.get('wow_beta'));

    return buildCache.get(version);
};

const pushCache = new Map();
const fetchLatestPush = async (version) => {
    if (pushCache.has(version)) {
        return pushCache.get(version);
    }

    const res = await fetch(`https://wow.tools/dbc/hotfix_api.php?start=0&length=1&search[value]=${version}`, {headers: headers});
    if (!res.ok) {
        throw new Error(`unexpected response ${res.statusText}`);
    }

    const hotfix = await res.json();
    const pushID = hotfix.recordsFiltered === 0 ? 0 : hotfix.data[0][0];
    pushCache.set(version, pushID);

    return pushID;
};

const CSVCache = new Map();
const fetchDB2 = async (db, {
    version = 'ptr',
    hotfix = false,
} = {}) => {
    if (!/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(version)) {
        version = await fetchLatestBuild(version);
    }

    if (!version) {
        throw new Error(`failing to fetch version ${version}`);
    }

    const buildID = version.match(/\d+$/)[0];
    if (!buildID) {
        throw new Error(`failing to fetch build id of version ${version}`);
    }

    const pushID = hotfix ? await fetchLatestPush(buildID) : 0;
    const filePath = path.resolve(__dirname, 'cache', `${db}_${buildID}_${pushID}.csv`);

    let localVersion = cache.get(db);
    if (!localVersion?.[buildID]?.[pushID]) {
        const res = await fetch(`https://wow.tools/dbc/api/export/?name=${db}&build=${version}&useHotfixes=${hotfix}`, {headers: headers});
        if (!res.ok) {
            throw new Error(`unexpected response ${res.statusText}`);
        }

        await pipeline(res.body, fs.createWriteStream(filePath));

        localVersion = localVersion ?? {};
        localVersion[buildID] = localVersion[buildID] ?? {};
        localVersion[buildID][pushID] = true;
        cache.set(db, localVersion);
        cache.save();
    }

    if (CSVCache.has(filePath)) {
        return CSVCache.get(filePath);
    }

    return await new Promise((resolve, reject) => {
        const result = [];

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

module.exports.fetch = fetchDB2;
