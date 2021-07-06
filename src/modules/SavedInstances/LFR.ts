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
    parent?: number,
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
            if (id !== undefined && name !== undefined && orderIndex !== undefined) {
                encounter.push({
                    id: parseInt(id),
                    name: name,
                    orderIndex: parseInt(orderIndex),
                });
            }
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
    const [dungeons, scenarios, steps, criteriaTree, criteria, encounter] =
        await Promise.all([
            fetchDB2('LFGDungeons'),
            fetchDB2('Scenario'),
            fetchDB2('ScenarioStep'),
            fetchDB2('CriteriaTree'),
            fetchDB2('Criteria'),
            fetchDB2('DungeonEncounter'),
        ]);

    const wings: WingInfo[] = [];
    const wingNameMap: Map<string, number> = new Map();
    let maxInstanceID = 0;
    dungeons.forEach((value) => {
        if (
            value.MapID === info.mapID.toString() &&
            value.ID !== undefined && value.Order_index !== undefined &&
            value.Name_lang !== undefined
        ) {
            const id = parseInt(value.ID);
            if (value.DifficultyID === '17') {
                wings.push({
                    orderIndex: parseInt(value.Order_index),
                    instanceID: id,
                    wingName: value.Name_lang,
                });
            }
            if (id > maxInstanceID) {
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

    scenarios.forEach((value) => {
        const flag = parseInt(value.Flags ?? '0');
        if (value.Type === '3' && (flag & 0x8) > 0 && value.Name_lang !== undefined) {
            if (value.Name_lang === info.name) {
                // use raid name but not wing name as scenario name
                const scenarioID = value.ID;
                if (scenarioID !== undefined) {
                    const title = findScenarioStepTitle(steps, scenarioID);
                    if (title !== undefined) {
                        const index = wingNameMap.get(title);
                        if (index !== undefined) {
                            wings[index].encounters =
                                findEncounters(
                                    steps, criteriaTree, criteria, encounter, scenarioID, info
                                );
                        }
                    }
                }
            } else if (wingNameMap.has(value.Name_lang)) {
                const index = wingNameMap.get(value.Name_lang);
                const scenarioID = value.ID;
                if (index !== undefined && scenarioID !== undefined) {
                    wings[index].encounters =
                        findEncounters(steps, criteriaTree, criteria, encounter, scenarioID, info);
                }
            }
        }
    });

    return wings;
};
