const { Good } = require('../Good.js');
const getGoods = async function() {
    const res = await Good.findAll()
    const data = JSON.parse(JSON.stringify(res));
    const arr = [];
    const obj = {};
    for (const o of data) {
        o.tab = o.tab.split(',')
        o.itemTitle = o.itemTitle.split(',');
        o.itemPrice = o.itemPrice.split(',');
        o.nowPrice = o.nowPrice.split(',');
        for (const key in o) {
            if (Object.hasOwnProperty.call(o, key)) {
                if (key == 'itemTitle') {
                    for (let i = 0; i < o.itemTitle.length; i++) {
                        let ob = {}
                        ob.title = o.itemTitle[i];
                        ob.price = o.itemPrice[i];
                        ob.counterPrice = o.nowPrice[i];
                        if (obj['dealItems']) {
                            obj['dealItems'].push(ob)
                        } else {
                            obj['dealItems'] = [];
                            obj['dealItems'].push(ob)
                        }
                    }

                } else if (key != 'itemPrice' && key != 'nowPrice') {
                    obj[key] = o[key]
                }
            }
        }
        arr.push(obj);
    }
    return arr;
    // console.log(arr);
}
module.exports = {
    getGoods
}