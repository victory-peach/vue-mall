const { Recommend } = require('../Recommend.js');
const getRecommend = async function() {
    const res = await Recommend.findAll();
    const data = JSON.parse(JSON.stringify(res));
    const obj = {}
    for (const o of data) {
        if (obj[o.area]) {
            obj[o.area].push(o);
        } else {
            obj[o.area] = [];
            obj[o.area].push(o)
        }
    }
    return obj;
    // console.log(obj);
}
module.exports = {
    getRecommend
}