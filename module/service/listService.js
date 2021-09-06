const { List } = require('../List.js')
const getSide = async function() {
    const list = await List.findAll();
    return JSON.parse(JSON.stringify(list));
}
module.exports = {
    getSide
}