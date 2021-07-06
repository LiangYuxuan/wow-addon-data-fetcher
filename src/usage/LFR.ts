import {findLatestInstance} from './../utils';
import {buildLFR} from './../modules/SavedInstances/LFR';

(async () => {
    const info = await findLatestInstance();
    if (info === undefined) {
        throw new Error('Failing to fetch instance info');
    }
    console.log(info);

    // TODO: level and altID and remap
    const LFRinfo = await buildLFR(info);
    let LFRText = '';
    let base = 1;
    LFRinfo.forEach((value) => {
        console.log(value.encounters);
        LFRText += `[${value.instanceID}] = { total=${value.encounters?.length}, base=${(base.toString() + ',').padEnd(3)} parent=${value.parent}, minLvl=60, remap={ ${value.encounters?.map((_value, index) => index + 1).join(', ')} } }, -- ${info.name}: ${value.wingName}\n`;
        base += value.encounters?.length ?? 0;
    });
    console.log(LFRText);
})();
