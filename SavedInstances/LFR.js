const fetcher = require('../fetcher');

const searchSteps = (steps, scenarioID) => {
    for (let i = 0; i < steps.length; ++i) {
        if (steps[i].ScenarioID === scenarioID) {
            return steps[i];
        }
    }
};

const buildLFR = async (mapID, name) => {
    const [dungeons, scenarios, steps, criterias] =
        await Promise.all([
            fetcher.fetchLatestVersion('LFGDungeons'),
            fetcher.fetchLatestVersion('Scenario'),
            fetcher.fetchLatestVersion('ScenarioStep'),
            fetcher.fetchLatestVersion('CriteriaTree'),
        ]);

    const instanceID = [];
    const wingName = [];
    for (let i = 0; i < dungeons.length; ++i) {
        if (dungeons[i].DifficultyID == '17' && dungeons[i].MapID == mapID) {
            instanceID.push(dungeons[i].ID);
            wingName.push(dungeons[i].Name_lang);
        }
    }

    if (wingName.length === 0) throw new Error(`Failing to find LFR wings of map id ${mapID}`);

    const wingID = [];
    for (let i = 0; i < scenarios.length; ++i) {
        const flag = parseInt(scenarios[i].Flags);
        if (scenarios[i].Type === '3' && (flag & 0x8)) {
            if (scenarios[i].Name_lang === name) {
                // use raid name but not wing name as scenario name
                const {Title_lang: title, CriteriatreeID: treeID} = searchSteps(steps, scenarios[i].ID);
                for (let j = 0; j < wingName.length; ++j) {
                    if (wingName[j] === title) {
                        wingID[j] = treeID;
                        break;
                    }
                }
            }
            else {
                for (let j = 0; j < wingName.length; ++j) {
                    if (scenarios[i].Name_lang == wingName[j]) {
                        wingID[j] = searchSteps(steps, scenarios[i].ID).CriteriatreeID;
                        break;
                    }
                }
            }
        }
    }

    const result = [];
    for (let i = 0; i < wingID.length; ++i) {
        const encounters = [];
        for (let j = 0; j < criterias.length; ++j) {
            if (criterias[j].Parent == wingID[i]) {
                encounters.push({
                    Name: criterias[j].Description_lang,
                    OrderIndex: parseInt(criterias[j].OrderIndex),
                });
            }
        }

        encounters.sort((left, right) => {
            return left.OrderIndex > right.OrderIndex;
        });

        result.push({
            instanceID: instanceID[i],
            wingName: wingName[i],
            encounters: encounters.map(value => value.Name),
        });
    }

    return result;
};

module.exports.buildLFR = buildLFR;
