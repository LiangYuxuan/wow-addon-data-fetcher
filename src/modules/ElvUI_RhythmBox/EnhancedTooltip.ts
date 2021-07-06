import {fetchDB2} from '../../core/fetcher';

interface InnerEncounter {
    id: string,
    name: string,
    orderIndex: number
}

interface InnerAchievement {
    id: string,
    name?: string,
    asset: string,
    modifierTree: string
}

const targetModifierTree = ['14716', '16442', '16425', '16423'];

// Mythic, Heroic, Normal, LFR
const targetDifficulty = ['16', '15', '14', '17'];

const parseModifierTree = async (modifierTree: string): Promise<number | undefined> => {
    const tree = await fetchDB2('ModifierTree');

    for (let i = 0; i < tree.length; ++i) {
        if (tree[i].Parent === modifierTree && tree[i].Type === '68') {
            const difficulty = tree[i].Asset;
            if (difficulty !== undefined) {
                const index = targetDifficulty.indexOf(difficulty);
                if (index !== -1) {
                    return index;
                }
            }
        }
    }
};

const findCriteria = (
    criteriaTree: CriteriaTreeDatabase[], criteria: CriteriaDatabase[], treeID: string
) => {
    for (let i = 0; i < criteriaTree.length; ++i) {
        if (criteriaTree[i].Parent === treeID && criteriaTree[i].CriteriaID !== undefined) {
            const id = criteriaTree[i].CriteriaID;
            for (let j = 0; j < criteria.length; ++j) {
                if (criteria[j].ID === id) {
                    return [criteria[j].Asset, criteria[j].Modifier_tree_ID];
                }
            }
        }
    }
};

export const fetchInstanceProgress = async (info: InstanceInfo): Promise<string[][]> => {
    const [encounter, achievement, criteriaTree, criteria] =
        await Promise.all([
            fetchDB2('DungeonEncounter'),
            fetchDB2('Achievement'),
            fetchDB2('CriteriaTree'),
            fetchDB2('Criteria'),
        ]);

    const instanceEncounter: InnerEncounter[] = [];
    encounter.forEach((value) => {
        if (
            value.MapID === info.mapID.toString() &&
            value.ID !== undefined && value.Name_lang !== undefined &&
            value.OrderIndex !== undefined
        ) {
            instanceEncounter.push({
                id: value.ID,
                name: value.Name_lang,
                orderIndex: parseInt(value.OrderIndex),
            });
        }
    });
    instanceEncounter.sort((left, right) => left.orderIndex - right.orderIndex);

    const instanceAchievement: InnerAchievement[] = [];
    achievement.forEach((value) => {
        if (
            value.Instance_ID === info.mapID.toString() && value.Flags === '1' &&
            value.ID !== undefined && value.Criteria_tree !== undefined
        ) {
            const result = findCriteria(criteriaTree, criteria, value.Criteria_tree);
            if (result) {
                const [asset, modifierTree] = result;
                if (asset !== undefined && modifierTree !== undefined) {
                    instanceAchievement.push({
                        id: value.ID,
                        name: value.Title_lang,
                        asset: asset,
                        modifierTree: modifierTree,
                    });
                }
            }
        }
    });

    const results: string[][] = [
        [], [], [], [],
    ];

    for (let i = 0; i < instanceAchievement.length; ++i) {
        const value = instanceAchievement[i];
        let index = targetModifierTree.indexOf(value.modifierTree);
        if (index === -1) {
            const retry = await parseModifierTree(value.modifierTree);
            if (retry === undefined) {
                throw new Error(`Unexpected Modifier Tree ID ${value.modifierTree} at Achievement ${value.id} (${value.name ?? ''})`);
            }
            console.log(`Uncached Modifier Tree ID ${value.modifierTree}, parsed to difficulty ${targetDifficulty[retry]}`);
            index = retry;
        }

        let bossIndex: number | undefined;
        instanceEncounter.forEach((encounterValue, index) => {
            if (encounterValue.id === value.asset) {
                bossIndex = index;
            }
        });
        if (bossIndex === undefined) {
            throw new Error(`Unable to find encounter ${value.asset}`);
        }

        results[index][bossIndex] = value.id;
    }

    return results;
};
