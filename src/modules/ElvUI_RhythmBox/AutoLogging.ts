import {fetchDB2} from '../../core/fetcher';

export const buildInstanceID = async (expansionID: number): Promise<{
    dungeon: Map<number, string>,
    raid: Map<number, string>
}> => {
    const map = await fetchDB2('Map');
    const expansion = expansionID.toString();

    const dungeons: Map<number, string> = new Map();
    const raids: Map<number, string> = new Map();

    for (let i = 0; i < map.length; ++i) {
        if (map[i].ExpansionID === expansion) {
            const id = map[i].ID;
            const name = map[i].MapName_lang;
            const type = map[i].InstanceType;

            if (id === undefined || name === undefined || type === undefined) {
                throw new Error(`Missing column from Map at index ${i}`);
            }

            if (name.match(/\[(NOT USED|DEV|NYI)\]/i)) {
                continue;
            }

            if (type === '1') {
                dungeons.set(parseInt(id), name);
            } else if (type === '2') {
                raids.set(parseInt(id), name);
            }
        }
    }

    return {
        dungeon: dungeons,
        raid: raids,
    };
};
