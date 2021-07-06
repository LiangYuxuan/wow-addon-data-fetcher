import {fetchLatestExpansion} from './../utils';
import {buildInstanceID} from './../modules/ElvUI_RhythmBox/AutoLogging';

(async () => {
    const expansionID = await fetchLatestExpansion();
    if (expansionID === undefined) {
        throw new Error(`Failling to fetch expansions`);
    }
    console.log('Expansion', expansionID);

    const {dungeon: dungeon, raid: raid} = await buildInstanceID(expansionID);
    let dungeonText = 'local dungeonList = {\n';
    for (const [id, name] of dungeon) {
        dungeonText += `    [${id}] = true, -- ${name}\n`;
    }
    dungeonText += '}\n';
    console.log(dungeonText);
    let raidText = 'local raidList = {\n';
    for (const [id, name] of raid) {
        raidText += `    [${id}] = true, -- ${name}\n`;
    }
    raidText += '}\n';
    console.log(raidText);
})();
