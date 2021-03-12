const fetcher = require('../fetcher');

const ClassSet = '9';
const Mask = 8;
const Position = '3';
const findAffectedSpell = async () => {
    const options = await fetcher.fetch('SpellClassOptions');

    const result = [];
    for (let i = 0; i < options.length; ++i) {
        if (options[i].SpellClassSet === ClassSet) {
            const ClassMask = parseInt(options[i][`SpellClassMask[${Position}]`]);
            if (ClassMask & Mask) {
                result.push(options[i].SpellID);
            }
        }
    }

    return result;
};

const getSpellName = async (spellID) => {
    const spellNames = await fetcher.fetch('SpellName');

    for (let i = 0; i < spellNames.length; ++i) {
        if (spellNames[i].ID === spellID) {
            return spellNames[i].Name_lang;
        }
    }
};

module.exports.findAffectedSpell = findAffectedSpell;

(async () => {
    const result = await findAffectedSpell();
    // console.log(result);

    for (let i = 0; i < result.length; ++i) {
        console.log(result[i], await getSpellName(result[i]));
    }
})();
