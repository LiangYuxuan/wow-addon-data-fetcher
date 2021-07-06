import {fetchJournalTiers} from '../utils';
import {buildMapList} from './../modules/ElvUI_RhythmBox/MythicPlus';

(async () => {
    const mapList = await buildMapList();

    let maxLength = 0;
    for (const data of mapList.values()) {
        for (const id of data.keys()) {
            if (id.toString().length > maxLength) {
                maxLength = id.toString().length;
            }
        }
    }

    const tier = await fetchJournalTiers();
    let mapText = 'local challengeMapIDs = {\n';
    for (const [expansionID, data] of mapList) {
        const expansion = tier.get(expansionID)?.name;
        mapText += `    -- ${expansion ?? 'Unknown'}\n`;
        for (const [id, name] of data) {
            mapText += `    ${(id.toString() + ',').padEnd(maxLength + 1)} -- ${name}\n`;
        }
        mapText += '\n';
    }
    mapText = mapText.slice(0, -1) + '}';
    console.log(mapText);
})();
