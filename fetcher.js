const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
const util = require('util');
const fetch = require('node-fetch');
const cache = require('./cache');

const cacheFile = cache(path.resolve(__dirname, 'cache', 'version.json'));

const pipeline = util.promisify(stream.pipeline);

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
};

const cacheCSV = {};

const fetchLatestVersion = async (filename) => {
    if (cacheCSV[filename]) {
        return cacheCSV[filename];
    }

    const versions = await fetch(`https://api.wow.tools/databases/${filename}/versions`, {headers: headers});
    if (!versions.ok) {
        throw new Error(`unexpected response ${versions.statusText}`);
    }

    const latest = (await versions.json())[0];
    const buildID = parseInt(latest.match(/.*\.(\d+)/)[1]);

    const filepath = path.resolve(__dirname, 'cache', filename + '.csv');

    const oldBuildID = cacheFile.get(filename);

    if (!oldBuildID || oldBuildID < buildID) {
        const res = await fetch(`https://wow.tools/dbc/api/export/?name=${filename}&build=${latest}`, {headers: headers});
        if (!res.ok) {
            throw new Error(`unexpected response ${res.statusText}`);
        }

        await pipeline(res.body, fs.createWriteStream(filepath));

        cacheFile.set(filename, buildID);
        cacheFile.save();
    }

    return await new Promise((resolve, reject) => {
        const result = [];

        fs.createReadStream(filepath)
            .pipe(csv())
            .on('error', reject)
            .on('data', (data) => result.push(data))
            .on('end', () => {
                cacheCSV[filename] = result;

                resolve(result);
            });
    });
};

module.exports.fetchLatestVersion = fetchLatestVersion;
