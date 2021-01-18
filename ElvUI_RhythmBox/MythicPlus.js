const fetcher = require('../fetcher');

const tierFix = (challengeMapID, expansionLevel) => {
    challengeMapID = parseInt(challengeMapID);
    expansionLevel = parseInt(expansionLevel);

    if (expansionLevel > 0) return expansionLevel;

    if (challengeMapID <= 78) {
        return 4;
    } else if (challengeMapID <= 197) {
        return 5;
    } else if (challengeMapID <= 244) {
        return 6;
    }
}

const buildMapList = async () => {
    const [tier, map] = await Promise.all([
        fetcher.fetchLatestVersion('JournalTier'),
        fetcher.fetchLatestVersion('MapChallengeMode'),
    ]);

    const result = [];
    let maxExpansion = 0;
    let maxLength = 0;
    for (let i = 0; i < map.length; ++i) {
        const ID = map[i].ID;
        const expansionLevel = tierFix(ID, map[i].ExpansionLevel);

        if (!result[expansionLevel]) {
            result[expansionLevel] = [];
        }
        result[expansionLevel].push({
            ID: ID,
            Name: map[i].Name_lang,
        });

        if (expansionLevel > maxExpansion) {
            maxExpansion = expansionLevel;
        }

        if (ID.length > maxLength) {
            maxLength = ID.length;
        }
    }

    let text = 'challengeMapIDs = {'
    for (let i = 0; i <= maxExpansion; ++i) {
        if (!result[i]) continue;

        text += `\n    -- ${tier[i].Name_lang}\n`;
        for (let j = 0; j < result[i].length; ++j) {
            const {ID, Name} = result[i][j];
            text += `    ${(ID + ',').padEnd(maxLength + 1)} -- ${Name}\n`;
        }
    }
    text += '}';

    return text;
}

module.exports.buildMapList = buildMapList;
