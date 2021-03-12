const fetcher = require('../fetcher');

const findLatestInstance = async () => {
    const [tier, tierXInstance, instance] =
        await Promise.all([
            fetcher.fetch('JournalTier'),
            fetcher.fetch('JournalTierXInstance'),
            fetcher.fetch('JournalInstance'),
        ]);

    const lastTier = tier[tier.length - 1].ID;

    const tierInstances = [];
    for (let i = 0; i < tierXInstance.length; ++i) {
        if (tierXInstance[i].JournalTierID === lastTier) {
            tierInstances.push(tierXInstance[i].JournalInstanceID);
        }
    }

    let maxOrderIndex; let maxInstanceID; let maxMapID; let maxName;
    for (let i = 0; i < instance.length; ++i) {
        if (instance[i].OrderIndex !== '0' && instance[i].Flags === '0') {
            // is raid && not world boss
            const instanceID = instance[i].ID;
            for (let j = 0; j < tierInstances.length; ++j) {
                if (instanceID === tierInstances[j]) {
                    const orderIndex = parseInt(instance[i].OrderIndex);
                    if (!maxOrderIndex || maxOrderIndex < orderIndex) {
                        maxInstanceID = instanceID;
                        maxMapID = instance[i].MapID;
                        maxName = instance[i].Name_lang;
                        maxOrderIndex = orderIndex;
                    }
                }
            }
        }
    }

    if (!maxInstanceID) throw new Error('Failing to find latest raid instance id');

    return {
        instanceID: maxInstanceID,
        name: maxName,
        mapID: maxMapID,
    };
};

const buildProgressID = async (instanceID, mapID, name) => {
    const [instance, encounter, achievement] =
        await Promise.all([
            fetcher.fetch('JournalInstance'),
            fetcher.fetch('JournalEncounter'),
            fetcher.fetch('Achievement'),
        ]);

    if (!mapID || !name) {
        for (let i = 0; i < instance.length; ++i) {
            if (instanceID === instance[i].ID) {
                mapID = instance[i].MapID;
                name = instance[i].Name_lang;
            }
        }
    }

    if (!mapID) throw new Error(`Failing to find instance ${instanceID}`);

    const encounters = [];
    for (let i = 0; i < encounter.length; ++i) {
        if (encounter[i].JournalInstanceID === instanceID) {
            encounters.push({
                ID: encounter[i].ID,
                Name: encounter[i].Name_lang,
                OrderIndex: parseInt(encounter[i].OrderIndex),
            });
        }
    }

    if (encounters.length === 0) throw new Error(`Failing to find encounters in instance ${instanceID}`);

    encounters.sort((left, right) => {
        return left.OrderIndex > right.OrderIndex;
    });

    const result = {
        'Raid Finder': [],
        'Normal': [],
        'Heroic': [],
        'Mythic': [],
    };
    const debugResult = {
        'Raid Finder': [],
        'Normal': [],
        'Heroic': [],
        'Mythic': [],
    };

    const regex = new RegExp(`(.*) Kills \\((Raid Finder|Normal|Heroic|Mythic) ${name}\\)`);
    for (let i = 0; i < achievement.length; ++i) {
        const curr = achievement[i];
        if (curr.Instance_ID === mapID && curr.Flags === '1') {
            const [title, bossName, difficulty] = curr.Title_lang.match(regex);
            if (title) {
                for (let j = 0; j < encounters.length; ++j) {
                    if (encounters[j].Name === bossName) {
                        result[difficulty][j] = curr.ID;
                        debugResult[difficulty][j] = [curr.ID, bossName];
                    }
                }
            }
        }
    }

    result['LFR'] = result['Raid Finder'];
    result['Raid Finder'] = undefined;

    const order = ['Mythic', 'Heroic', 'Normal', 'LFR'];
    const length = encounters.length;

    let text = '';
    for (let i = 0; i < order.length; ++i) {
        const arr = result[order[i]];
        if (arr.length !== length) {
            throw new Error(`Boss length (${arr.length}) don't match in ${order[i]}`);
        }
        for (let i = 0; i < length; ++i) {
            if (!arr[i]) {
                throw new Error(`Boss (${encounters[i].Name}) not found in index (${i})`);
            }
        }

        text += `['${order[i]}'] = {\n    `;
        text += arr.join(', ');
        text += ',\n},\n';
    }

    return {
        text: text,
        debug: debugResult,
    };
};

module.exports.findLatestInstance = findLatestInstance;
module.exports.buildProgressID = buildProgressID;
