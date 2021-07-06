import {exit} from 'process';
import {parseSpellEffect} from './../modules/Misc/SpellEffect';
import {spellEffectName, effectAuraType} from './../modules/Misc/SpellEffectEnum';

if (process.argv.length < 3) {
    console.error(`Error: Expected spell id but got none.`);
    exit(-1);
}

const spellID = parseInt(process.argv[2]);

(async () => {
    const info = await parseSpellEffect(spellID);
    console.log(`Spell ${info.name}(${info.id}) of ${info.className}`);
    info.effect?.forEach((value, index) => {
        console.log(`Effect #${index + 1} ${spellEffectName.get(value.effect)}(${value.effect})`);
        console.log(`${effectAuraType.get(value.effectAura)}(${value.effectAura}) ${value.effectBaseValue} ${value.effectMiscValue[0]} ${value.effectMiscValue[1]}`);
        value.effectSpell.forEach((value) => {
            console.log(`    ${value.name}(${value.id})`);
        });
    });
})();
