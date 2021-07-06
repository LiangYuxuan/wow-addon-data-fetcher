import {findLatestInstance} from './../utils';
import {fetchInstanceProgress} from './../modules/ElvUI_RhythmBox/EnhancedTooltip';

const displayName = ['Mythic', 'Heroic', 'Normal', 'LFR'];

(async () => {
    const info = await findLatestInstance();
    if (info === undefined) {
        throw new Error('Failing to fetch instance info');
    }
    console.log(info);

    const progress = await fetchInstanceProgress(info);
    let progressText = '';
    for (let i = 0; i < displayName.length; ++i) {
        progressText += `['${displayName[i]}'] = {\n    `;
        progressText += progress[i].join(', ');
        progressText += ',\n},\n';
    }
    console.log(progressText);
})();
