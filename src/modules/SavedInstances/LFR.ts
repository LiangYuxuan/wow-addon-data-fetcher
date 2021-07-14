import {fetchDB2} from '../../core/fetcher';

interface EncounterInfo {
    id: number,
    name: string,
    bossIndex: number
}

interface WingInfo {
    orderIndex: number,
    instanceID: number,
    wingName: string,
    expansionLevel: number,
    parent?: number,
    level?: number,
    soloID?: number,
    encounters?: EncounterInfo[]
}

const findScenarioStepTitle = (
    scenarioStep: ScenarioStepDatabase[],
    scenarioID: string,
): string | undefined => {
    for (let i = 0; i < scenarioStep.length; ++i) {
        if (scenarioStep[i].ScenarioID === scenarioID) {
            return scenarioStep[i].Title_lang;
        }
    }
};

const findEncounters = (
    scenarioStep: ScenarioStepDatabase[],
    criteriaTree: CriteriaTreeDatabase[],
    criteria: CriteriaDatabase[],
    dungeonEncounter: DungeonEncounterDatabase[],
    scenarioID: string,
    info: InstanceInfo
): EncounterInfo[] | undefined => {
    const encounter: {id: number, name: string, orderIndex: number}[] = [];
    for (let i = 0; i < dungeonEncounter.length; ++i) {
        if (dungeonEncounter[i].MapID === info.mapID.toString()) {
            const id = dungeonEncounter[i].ID;
            const name = dungeonEncounter[i].Name_lang;
            const orderIndex = dungeonEncounter[i].OrderIndex;
            if (id === undefined || name === undefined || orderIndex === undefined) {
                throw new Error(`Missing column from DungeonEncounter at index ${i}`);
            }

            encounter.push({
                id: parseInt(id),
                name: name,
                orderIndex: parseInt(orderIndex),
            });
        }
    }
    encounter.sort((left, right) => left.orderIndex - right.orderIndex);

    const encounterIDMap = encounter.map((value) => value.id);

    for (let i = 0; i < scenarioStep.length; ++i) {
        if (scenarioStep[i].ScenarioID === scenarioID) {
            const criteriaTreeID = scenarioStep[i].CriteriatreeID;
            const result: EncounterInfo[] = [];
            for (let j = 0; j < criteriaTree.length; ++j) {
                if (criteriaTree[j].Parent === criteriaTreeID) {
                    const criteriaID = criteriaTree[j].CriteriaID;
                    for (let k = 0; k < criteria.length; ++k) {
                        if (criteria[k].ID === criteriaID) {
                            const asset = parseInt(criteria[k].Asset ?? '0');
                            const index = encounterIDMap.indexOf(asset);
                            result.push({
                                id: asset,
                                name: encounter[index].name,
                                bossIndex: index,
                            });
                            break;
                        }
                    }
                }
            }
            return result;
        }
    }
};

export const buildLFR = async (info: InstanceInfo): Promise<WingInfo[]> => {
    const [dungeons, scenarios, steps, criteriaTree, criteria, encounter, contentTuning] =
        await Promise.all([
            fetchDB2('LFGDungeons'),
            fetchDB2('Scenario'),
            fetchDB2('ScenarioStep'),
            fetchDB2('CriteriaTree'),
            fetchDB2('Criteria'),
            fetchDB2('DungeonEncounter'),
            fetchDB2('ContentTuning'),
        ]);

    const wings: WingInfo[] = [];
    const wingNameMap: Map<string, number> = new Map();
    let maxInstanceID = 0;
    dungeons.forEach((value, index) => {
        if (
            value.ID === undefined ||
            value.Order_index === undefined ||
            value.Name_lang === undefined ||
            value.ExpansionLevel === undefined ||
            value.ContentTuningID === undefined ||
            value['Flags[1]'] === undefined
        ) {
            throw new Error(`Missing column from LFGDungeons at index ${index}`);
        }

        if (value.MapID === info.mapID.toString()) {
            const id = parseInt(value.ID);

            if (value.DifficultyID === '7' || value.DifficultyID === '17') {
                const flag = parseInt(value['Flags[1]']);
                if ((flag & 0x20) > 0) {
                    for (let i = 0; i < wings.length; ++i) {
                        if (wings[i].wingName === value.Name_lang) {
                            wings[i].soloID = id;

                            for (let j = 0; j < contentTuning.length; ++j) {
                                if (contentTuning[j].ID === value.ContentTuningID) {
                                    const level = contentTuning[j].MinLevel;
                                    if (level === undefined) {
                                        throw new Error(`Missing column MinLevel from ContentTuning at index ${j}`);
                                    }

                                    wings[i].level = parseInt(level);
                                    break;
                                }
                            }
                            return;
                        }
                    }
                }
                wings.push({
                    orderIndex: parseInt(value.Order_index),
                    instanceID: id,
                    wingName: value.Name_lang,
                    expansionLevel: parseInt(value.ExpansionLevel),
                });
                if (value.ContentTuningID !== '949') {
                    for (let i = 0; i < contentTuning.length; ++i) {
                        if (contentTuning[i].ID === value.ContentTuningID) {
                            const level = contentTuning[i].MinLevel;
                            if (level === undefined) {
                                throw new Error(`Missing column MinLevel from ContentTuning at index ${i}`);
                            }

                            wings[wings.length - 1].level = parseInt(level);
                            break;
                        }
                    }
                }
            } else if (id > maxInstanceID) {
                maxInstanceID = id;
            }
        }
    });

    if (wings.length === 0) {
        throw new Error(`Failing to find LFR wings of map id ${info.mapID}`);
    }

    wings.sort((left, right) => left.orderIndex - right.orderIndex);
    wings.forEach((value, index) => {
        value.parent = maxInstanceID;
        wingNameMap.set(value.wingName, index);
    });

    scenarios.forEach((value, index) => {
        if (value.Name_lang === undefined || value.Flags === undefined || value.ID === undefined) {
            throw new Error(`Missing column from Scenario at index ${index}`);
        }

        const flag = parseInt(value.Flags);
        if (value.Type === '3' && (flag & 0x8) > 0) {
            if (value.Name_lang === info.name) {
                // use raid name but not wing name as scenario name
                const scenarioID = value.ID;
                const title = findScenarioStepTitle(steps, scenarioID);
                if (title === undefined) {
                    throw new Error(`Failing to find step title of Scenario ${scenarioID}`);
                }

                const index = wingNameMap.get(title);
                if (index === undefined) {
                    throw new Error(`Failing to find wing by title ${title}`);
                }

                wings[index].encounters =
                    findEncounters(
                        steps, criteriaTree, criteria, encounter, scenarioID, info
                    );
            } else if (wingNameMap.has(value.Name_lang)) {
                const scenarioID = value.ID;
                const index = wingNameMap.get(value.Name_lang);
                if (index === undefined) {
                    throw new Error(`Unexpected failing to find wing by title ${value.Name_lang}`);
                }

                wings[index].encounters =
                    findEncounters(steps, criteriaTree, criteria, encounter, scenarioID, info);
            }
        }
    });

    return wings;
};
