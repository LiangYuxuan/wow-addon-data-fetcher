import {fetchDB2} from '../../core/fetcher';

const skillParents = new Map([
    [164, 'Blacksmithing'],
    [165, 'Leatherworking'],
    [171, 'Alchemy'],
    [182, 'Herbalism'],
    [185, 'Cooking'],
    [186, 'Mining'],
    [197, 'Tailoring'],
    [202, 'Engineering'],
    [333, 'Enchanting'],
    [356, 'Fishing'],
    [393, 'Skinning'],
    [755, 'Jewelcrafting'],
    [773, 'Inscription'],
]);

const getCooldownInfo = (
    cooldowns: SpellCooldownsDatabase[],
    spellID: number
): SpellCooldownsDatabase | undefined => {
    for (let i = 0; i < cooldowns.length; ++i) {
        if (cooldowns[i].SpellID === spellID.toString()) {
            return cooldowns[i];
        }
    }
};

const getCategoryInfo = (
    categories: SpellCategoriesDatabase[],
    category: SpellCategoryDatabase[],
    spellID: number
): SpellCategoryDatabase | undefined => {
    for (let i = 0; i < categories.length; ++i) {
        if (categories[i].SpellID === spellID.toString()) {
            const categoryID = categories[i].Category;
            const chargeCategoryID = categories[i].ChargeCategory;
            for (let j = 0; j < category.length; ++j) {
                if (category[j].ID === categoryID || category[j].ID === chargeCategoryID) {
                    return category[j];
                }
            }
            return;
        }
    }
};

const getSpellName = (
    spellName: SpellNameDatabase[],
    spellID: number
): string | undefined => {
    for (let i = 0; i < spellName.length; ++i) {
        if (spellName[i].ID === spellID.toString()) {
            return spellName[i].Name_lang;
        }
    }
};

export const buildAllTradeSkill = () => {
    //
};

export const buildTradeSkill = async (tierIndex: number) => {
    const [skillLine, ability, cooldowns, categories, category, spellName] =
        await Promise.all([
            fetchDB2('SkillLine', {version: 'beta'}),
            fetchDB2('SkillLineAbility', {version: 'beta'}),
            fetchDB2('SpellCooldowns', {version: 'beta'}),
            fetchDB2('SpellCategories', {version: 'beta'}),
            fetchDB2('SpellCategory', {version: 'beta'}),
            fetchDB2('SpellName', {version: 'beta'}),
        ]);

    const skill = new Map(skillLine
        .filter((value) =>
            parseInt(value.ParentTierIndex ?? '', 10) === tierIndex &&
            skillParents.has(parseInt(value.ParentSkillLineID ?? '', 10))
        )
        .map((value) => [value.ID, value.DisplayName_lang])
    );

    const result = [];
    for (let i = 0; i < ability.length; ++i) {
        if (skill.has(ability[i].SkillupSkillLineID)) {
            const spellText = ability[i].Spell;
            const spellID = spellText !== undefined ? parseInt(spellText) : undefined;
            if (spellID !== undefined) {
                const cooldownInfo = getCooldownInfo(cooldowns, spellID);
                const categoryInfo = getCategoryInfo(categories, category, spellID);

                if (cooldownInfo !== undefined || categoryInfo !== undefined) {
                    result.push({
                        spellID,
                        spellName: getSpellName(spellName, spellID),
                        cooldownInfo,
                        categoryInfo,
                    });
                }
            }
        }
    }

    return result;
};
