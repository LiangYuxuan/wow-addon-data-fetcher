import {fetchDB2} from '../core/fetcher';

export const fetchJournalTiers = async (): Promise<Map<number, JournalTier>> => {
    const tier = await fetchDB2('JournalTier');

    const result: Map<number, JournalTier> = new Map();
    tier.forEach((value, index) => {
        if (
            value.ID === undefined ||
            value.Name_lang === undefined
        ) {
            throw new Error(`Missing column from JournalTier at index ${index}`);
        }

        result.set(index, {
            id: parseInt(value.ID),
            expansion: index,
            name: value.Name_lang,
        });
    });

    return result;
};

export const findLatestJournalTier = async (): Promise<number | undefined> => {
    const tier = await fetchDB2('JournalTier');

    const tierID = tier[tier.length - 1].ID;
    if (tierID === undefined) return;

    return parseInt(tierID);
};

export const fetchLatestExpansion = async (): Promise<number | undefined> => {
    const map = await fetchDB2('Map');

    let maxExpansion: number | undefined;
    for (let i = 0; i < map.length; ++i) {
        const expansionID = map[i].ExpansionID;
        if (expansionID === undefined) {
            throw new Error(`Missing column ExpansionID from Map at index ${i}`);
        }

        const expansion = parseInt(expansionID);
        if (maxExpansion === undefined || maxExpansion < expansion) {
            maxExpansion = expansion;
        }
    }

    return maxExpansion;
};

export const findLatestInstance = async (): Promise<InstanceInfo | undefined> => {
    const [tier, tierXInstance, instance] =
        await Promise.all([
            fetchDB2('JournalTier'),
            fetchDB2('JournalTierXInstance'),
            fetchDB2('JournalInstance'),
        ]);

    const lastTier = tier[tier.length - 1].ID;
    if (lastTier === undefined) return;

    const tierInstances: string[] = [];
    for (let i = 0; i < tierXInstance.length; ++i) {
        if (tierXInstance[i].JournalTierID === lastTier) {
            const instanceID = tierXInstance[i].JournalInstanceID;
            if (instanceID === undefined) {
                throw new Error(`Missing column JournalInstanceID from JournalTierXInstance at index ${i}`);
            }

            tierInstances.push(instanceID);
        }
    }

    let maxIndex: number | undefined;
    let result: InstanceInfo | undefined;
    for (let i = 0; i < instance.length; ++i) {
        if (instance[i].OrderIndex !== '0' && instance[i].Flags === '0') {
            // is raid && not world boss
            const instanceID = instance[i].ID;
            const orderIndex = instance[i].OrderIndex;
            const mapID = instance[i].MapID;
            const name = instance[i].Name_lang;
            if (
                instanceID === undefined || orderIndex === undefined ||
                mapID === undefined || name === undefined
            ) {
                throw new Error(`Missing column from JournalInstance at index ${i}`);
            }

            if (tierInstances.includes(instanceID)) {
                const index = parseInt(orderIndex);
                if (maxIndex === undefined || maxIndex < index) {
                    result = {
                        journalInstanceID: parseInt(instanceID),
                        mapID: parseInt(mapID),
                        name: name,
                    };
                }
            }
        }
    }

    return result;
};
