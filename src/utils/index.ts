import {fetchDB2} from '../core/fetcher';

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
        if (expansionID !== undefined) {
            const expansion = parseInt(expansionID);
            if (maxExpansion === undefined || maxExpansion < expansion) {
                maxExpansion = expansion;
            }
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
            if (instanceID !== undefined) {
                tierInstances.push(instanceID);
            }
        }
    }

    let maxIndex: number | undefined;
    let result: InstanceInfo | undefined;
    for (let i = 0; i < instance.length; ++i) {
        if (instance[i].OrderIndex !== '0' && instance[i].Flags === '0') {
            // is raid && not world boss
            const instanceID = instance[i].ID;
            const orderIndex = instance[i].OrderIndex;
            if (
                instanceID !== undefined && orderIndex !== undefined &&
                tierInstances.includes(instanceID)
            ) {
                const index = parseInt(orderIndex);
                if (maxIndex === undefined || maxIndex < index) {
                    const mapID = instance[i].MapID;
                    const name = instance[i].Name_lang;
                    if (mapID !== undefined && name !== undefined) {
                        result = {
                            journalInstanceID: parseInt(instanceID),
                            mapID: parseInt(mapID),
                            name: name,
                        };
                    }
                }
            }
        }
    }

    return result;
};
