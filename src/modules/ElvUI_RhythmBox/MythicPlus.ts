import {fetchDB2} from '../../core/fetcher';

const tierFix = (challengeMapID: number, expansionLevel: number): number => {
    if (expansionLevel > 0) return expansionLevel;

    if (challengeMapID <= 78) {
        return 4;
    } else if (challengeMapID <= 197) {
        return 5;
    } else if (challengeMapID <= 244) {
        return 6;
    }
    return expansionLevel;
};

export const buildMapList = async (): Promise<Map<number, Map<number, string>>> => {
    const map = await fetchDB2('MapChallengeMode');

    const result: Map<number, Map<number, string>> = new Map();

    for (let i = 0; i < map.length; ++i) {
        const id = map[i].ID;
        const expansionLevel = map[i].ExpansionLevel;
        const name = map[i].Name_lang;
        if (id === undefined || expansionLevel === undefined || name === undefined) {
            throw new Error(`Missing column from MapChallengeMode at index ${i}`);
        }

        const expansion = tierFix(parseInt(id), parseInt(expansionLevel));
        if (!result.has(expansion)) {
            const expansionMap: Map<number, string> = new Map();
            result.set(expansion, expansionMap);
        }

        result.get(expansion)?.set(parseInt(id), name);
    }

    return result;
};
