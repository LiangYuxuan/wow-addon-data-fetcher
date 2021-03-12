const fetcher = require('../fetcher');

const ValorID = '1191';
const KSMCondition = '89910';
const fetchValorCost = async () => {
    const [cost, entry] = await Promise.all([
        fetcher.fetch('ItemExtendedCost'),
        fetcher.fetch('ItemBonusListGroupEntry'),
    ]);

    const costMap = new Map();
    for (let i = 0; i < cost.length; ++i) {
        if (cost[i]['CurrencyID[0]'] === ValorID) {
            costMap.set(cost[i].ID, parseInt(cost[i]['CurrencyCount[0]']));
        }
    }

    const groupIDMap = new Map();
    for (let i = 0; i < entry.length; ++i) {
        if (entry[i].UnlockCondition === KSMCondition) {
            groupIDMap.set(entry[i].ItemBonusListGroupID, true);
        }
    }

    const result = [];
    for (const groupID of groupIDMap.keys()) {
        result[groupID] = [];
    }
    for (let i = 0; i < entry.length; ++i) {
        if (groupIDMap.has(entry[i].ItemBonusListGroupID)) {
            const groupID = entry[i].ItemBonusListGroupID;
            const orderIndex = parseInt(entry[i].OrderIndex) - 1;
            const bonusID = parseInt(entry[i].ItemBonusListID);
            const costValue = costMap.get(entry[i].ItemExtendedCostID);
            result[groupID][orderIndex] = [bonusID, costValue];
        }
    }

    return result;
};

module.exports.fetchValorCost = fetchValorCost;

(async () => {
    console.log(await fetchValorCost());
})();
