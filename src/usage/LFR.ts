import {findLatestInstance} from './../utils';
import {buildLFR} from './../modules/SavedInstances/LFR';

(async () => {
    const info = await findLatestInstance();
    if (info === undefined) {
        throw new Error('Failing to fetch instance info');
    }
    console.log(info);

    const LFRinfo = await buildLFR(info);
    let LFRText = '';
    let LFRSpecialText = '';
    let base = 1;
    LFRinfo.forEach((value) => {
        const remap = value.encounters?.map((_, index) => index + 1).join(', ');

        let line = `[${value.instanceID}] = { total=${value.encounters?.length}, `;
        line += `base=${(base.toString() + ',').padEnd(3)} parent=${value.parent}, minLvl=${value.level}, `;
        if (value.soloID !== undefined) {
            line += `altid=${value.soloID}, `;
        }
        line += `remap={ ${remap} } }, -- ${info.name}: ${value.wingName}\n`;

        const remapLowExpect = value.encounters?.map((_, index) => base + index).join(', ');
        const remapLow = value.encounters?.map((value) => value.bossIndex + 1).join(', ');
        if (remapLowExpect !== remapLow) {
            LFRSpecialText += `elseif id == ${value.instanceID} then -- ${info.name}: ${value.wingName}\n`;
            LFRSpecialText += `  info.remap = { ${remapLow} }\n`;
        }

        LFRText += line;
        base += value.encounters?.length ?? 0;
    });
    console.log(LFRText);
    console.log(LFRSpecialText);
})();
