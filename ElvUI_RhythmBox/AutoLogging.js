const fetcher = require('../fetcher');

const fetchLatestExpansion = async () => {
    const map = await fetcher.fetch('Map');

    let maxExpansion;
    for (let i = 0; i < map.length; ++i) {
        const expansionID = parseInt(map[i].ExpansionID);
        if (!maxExpansion || maxExpansion < expansionID) {
            maxExpansion = expansionID;
        }
    }

    return maxExpansion;
};

const buildInstanceID = async (expansionID) => {
    const map = await fetcher.fetch('Map');

    const dungeons = [];
    const raids = [];

    if (typeof(expansionID) === 'number') {
        expansionID = expansionID.toString();
    }

    for (let i = 0; i < map.length; ++i) {
        if (map[i].ExpansionID === expansionID) {
            if (map[i].InternalName.match(/\[(NOT USED|DEV|NYI)\]/i)) {
                continue;
            }

            if (map[i].InstanceType === '1') {
                dungeons.push(`[${map[i].ID}] = true, -- ${map[i].MapName_lang}`);
            } else if (map[i].InstanceType === '2') {
                raids.push(`[${map[i].ID}] = true, -- ${map[i].MapName_lang}`);
            }
        }
    }

    let text = '';

    text += 'dungeonList = {\n    ';
    text += dungeons.join('\n    ');
    text += '\n}\n\n';

    text += 'raidList = {\n    ';
    text += raids.join('\n    ');
    text += '\n}\n\n';

    return text;
};

module.exports.fetchLatestExpansion = fetchLatestExpansion;
module.exports.buildInstanceID = buildInstanceID;
