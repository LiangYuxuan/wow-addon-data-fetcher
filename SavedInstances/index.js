const ET = require('./../ElvUI_RhythmBox/EnhancedTooltip');
const LFR = require('./LFR');

(async () => {
    const {instanceID, name, mapID} = await ET.findLatestInstance();
    console.log(`Fetching latest instance: ${name} (${instanceID} @ ${mapID})`);

    console.log(await LFR.buildLFR(mapID, name));
})();
