import fetch from 'node-fetch';

import {fetchDB2} from '../../core/fetcher';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
};

interface HearthstoneInfo {
    itemID: number,
    itemName?: string,
}

export const buildHearthstoneList = async () => {
    const [itemEffect, itemXItemEffect] =
        await Promise.all([
            fetchDB2('ItemEffect', {version: 'beta'}),
            fetchDB2('ItemXItemEffect', {version: 'beta'}),
        ]);

    const itemEffects = itemEffect
        .filter((v) => v.SpellCategoryID === '1176')
        .map((v) => v.ID)
        .filter((id) => id !== undefined) as string[];

    const itemIDs = itemEffects.map((v) => {
        let itemID = undefined;
        for (let i = 0; i < itemXItemEffect.length; ++i) {
            if (itemXItemEffect[i].ItemEffectID === v) {
                itemID = itemXItemEffect[i].ItemID;
            }
        }
        return itemID;
    }).filter((id) => id !== undefined) as string[];

    const result: HearthstoneInfo[] = [];
    for (let i = 0; i < itemIDs.length; ++i) {
        let itemName: string | undefined = undefined;
        try {
            const res = await fetch(`https://www.wowhead.com/tooltip/item/${itemIDs[i]}`, {headers: headers});
            const data = await res.json();

            itemName = data.name as string;
        } catch (error) {
            // ignores
        }

        result.push({
            itemID: parseInt(itemIDs[i]),
            itemName,
        });
    }

    return result;
};
