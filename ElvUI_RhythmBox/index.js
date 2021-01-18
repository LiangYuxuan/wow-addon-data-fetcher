const AL = require('./AutoLogging');
const ET = require('./EnhancedTooltip');
const MP = require('./MythicPlus');

(async () => {
    const {instanceID, name, mapID} = await ET.findLatestInstance();
    console.log(`Fetching latest instance: ${name} (${instanceID} @ ${mapID})`);

    const {text: ETText, debug: ETDebug} = await ET.buildProgressID(instanceID, mapID, name);
    console.log(ETDebug);
    console.log(ETText);

    const expansionID = await AL.fetchLatestExpansion();
    console.log(`Fetching latest expansion: ${expansionID}`);

    console.log(await AL.buildInstanceID(expansionID));

    console.log(await MP.buildMapList());
})();
