import {fetchDB2} from '../../core/fetcher';
import {spellClassSet} from './SpellEffectEnum';

interface Spell {
    id: number,
    name: string,
    className?: string,
    effect?: SpellEffect[]
}

interface SpellEffect {
    effect: number,
    effectAura: number,
    effectBaseValue: number,
    effectMiscValue: number[],
    effectSpellClassMask: number[],
    effectSpell: Spell[],
    orderIndex: number
}

export const parseSpellEffect = async (spellID: number): Promise<Spell> => {
    const [spellEffect, specSpell, spec, classData, spellClass, spell] =
        await Promise.all([
            fetchDB2('SpellEffect'),
            fetchDB2('SpecializationSpells'),
            fetchDB2('ChrSpecialization'),
            fetchDB2('ChrClasses'),
            fetchDB2('SpellClassOptions'),
            fetchDB2('SpellName'),
        ]);

    const spellIDString = spellID.toString();

    let spellName = 'Unknown';
    for (let i = 0; i < spell.length; ++i) {
        if (spell[i].ID === spellIDString) {
            const curr = spell[i].Name_lang;
            if (curr === undefined) {
                throw new Error(`Missing column Name_lang from SpellName at index ${i}`);
            }

            spellName = curr;
        }
    }

    let classID: string | undefined;
    for (let i = 0; i < specSpell.length; ++i) {
        if (specSpell[i].SpellID === spellIDString) {
            const spellSpec = specSpell[i].SpecID;
            if (spellSpec === undefined) {
                throw new Error(`Missing column SpecID from SpecializationSpells at index ${i}`);
            }

            for (let j = 0; j < spec.length; ++j) {
                if (spec[j].ID === spellSpec) {
                    classID = spec[j].ClassID;
                    break;
                }
            }
            break;
        }
    }
    if (classID === undefined) {
        throw new Error(`Failing to fetch class of spell ${spellID}`);
    }

    let className = 'Unknown';
    for (let i = 0; i < classData.length; ++i) {
        if (classData[i].ID === classID) {
            const curr = classData[i].Name_lang;
            if (curr === undefined) {
                throw new Error(`Missing column Name_lang from ChrClasses at index ${i}`);
            }

            className = curr;
            break;
        }
    }

    let spellClassSetID: string | undefined;
    for (const [key, value] of spellClassSet) {
        if (value === className) {
            spellClassSetID = key.toString();
        }
    }
    if (spellClassSetID === undefined) {
        throw new Error(`Failling to get SpellClassSet of class ${className}(${classID})`);
    }

    const effect: SpellEffect[] = [];
    spellEffect.forEach((value, index) => {
        if (value.SpellID === spellIDString) {
            if (value.EffectIndex === undefined ||
                value.Effect === undefined || value.EffectAura === undefined ||
                value.EffectBasePointsF === undefined ||
                value['EffectMiscValue[0]'] === undefined || value['EffectMiscValue[1]'] === undefined ||
                value['EffectSpellClassMask[0]'] === undefined || value['EffectSpellClassMask[1]'] === undefined ||
                value['EffectSpellClassMask[2]'] === undefined || value['EffectSpellClassMask[3]'] === undefined
            ) {
                throw new Error(`Missing column from SpellEffect at index ${index}`);
            }

            effect.push({
                effect: parseInt(value.Effect),
                effectAura: parseInt(value.EffectAura),
                effectBaseValue: parseInt(value.EffectBasePointsF),
                effectMiscValue: [
                    parseInt(value['EffectMiscValue[0]']),
                    parseInt(value['EffectMiscValue[1]']),
                ],
                effectSpellClassMask: [
                    parseInt(value['EffectSpellClassMask[0]']),
                    parseInt(value['EffectSpellClassMask[1]']),
                    parseInt(value['EffectSpellClassMask[2]']),
                    parseInt(value['EffectSpellClassMask[3]']),
                ],
                effectSpell: [],
                orderIndex: parseInt(value.EffectIndex),
            });
        }
    });

    effect.forEach((value) => {
        for (let i = 0; i < spellClass.length; ++i) {
            const currSpell = spellClass[i];
            if (currSpell.SpellClassSet === spellClassSetID) {
                if (currSpell.SpellID === undefined ||
                    currSpell['SpellClassMask[0]'] === undefined || currSpell['SpellClassMask[1]'] === undefined ||
                    currSpell['SpellClassMask[2]'] === undefined || currSpell['SpellClassMask[3]'] === undefined
                ) {
                    throw new Error(`Missing column from SpellClassOptions at index ${i}`);
                }

                const masks = [
                    parseInt(currSpell['SpellClassMask[0]']),
                    parseInt(currSpell['SpellClassMask[1]']),
                    parseInt(currSpell['SpellClassMask[2]']),
                    parseInt(currSpell['SpellClassMask[3]']),
                ];
                const isAffected = masks.map((mask, index) => {
                    return ((value.effectSpellClassMask[index] & mask) > 0);
                }).includes(true);

                if (isAffected) {
                    let currName = 'Unknown';
                    for (let j = 0; j < spell.length; ++j) {
                        const spellInfo = spell[j];
                        if (spellInfo.Name_lang === undefined) {
                            throw new Error(`Missing column Name_lang from SpellName at index ${j}`);
                        }

                        if (currSpell.SpellID === spellInfo.ID) {
                            currName = spellInfo.Name_lang;
                            break;
                        }
                    }
                    value.effectSpell.push({
                        id: parseInt(currSpell.SpellID),
                        name: currName,
                    });
                }
            }
        }
    });

    return {
        id: spellID,
        name: spellName,
        className: className,
        effect: effect,
    };
};
