import {buildHearthstoneList} from './../modules/ElvUI_RhythmBox/Hearthstones';

const ignoreItemIDs = [
    6948, // Hearthstone
    28585, // Ruby Slippers
    60498, // Trans-Dimensional Fabricator
    142298, // Astonishingly Scarlet Slippers
    184844, // Test Item
];

(async () => {
    const result = await buildHearthstoneList();

    const text = result
        .filter(({itemID}) => !ignoreItemIDs.includes(itemID))
        .map(({itemID, itemName}) => `${itemID}, -- ${itemName}`).
        join('\n');

    console.log(text);
})();
