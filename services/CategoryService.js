const category = require('../module/Category')

// exports.findAllCat = async function(){
//     const data = await category.findAll();
//     return data.JSON()
// }
exports.findCategory = async function () {
    const data = await category.findAll();
    return data;
}

exports.findTarget = async function (target) {
    const data = await category.findOne({
        where: {
            name: target
        }
    })
    return data;
}

