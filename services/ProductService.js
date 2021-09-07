const Product = require('../module/Product')
const { Op } = require('sequelize');
const sequelize = require('sequelize');
exports.addProduct = async function (product) {
    const res = await Product.create(product);
    return res;
}

exports.findAllPro = async function () {
    const data = await Product.findAll();
    return data;
}

exports.productDetail = async function (id) {
    const data = await Product.findOne({
        where: {
            id
        }
    })
    return data;
}
exports.delProduct = async function (id) {
    const data = await Product.destroy({
        where: {
            id
        }
    })
    return data;
}

exports.updateProduct = async function (id, data) {
    const res = await Product.update(data, {
        where: {
            id
        }
    });
    return res;
}

exports.findCart = async function (idarr) {
    const res = await Product.findAll({
        where: {
            [Op.or]: idarr,
        }
    });
    return res;
}

exports.findList = async function (type, page, size, sort, category) {
    console.log(type, page, size, sort, category);
    //size是字符串
    if (sort == 'all') {
        let data;
        // console.log(typeof type);
        if (type === '2') {
            console.log(page);
            data = await Product.findAll({
                where: {
                    categoryContent: category
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        } else {
            data = await Product.findAll({
                where: {
                    c_item: {
                        [Op.substring]: type,
                    }
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        }
        return data;

    } else if (sort == 'sale') {
        let data;
        if (type === '2') {
            data = await Product.findAll({
                where: {
                    categoryContent: category
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        } else {
            data = await Product.findAll({
                order: sequelize.col('inventory'),
                // offset: (page - 1) * size,
                // limit: size,
                where: {
                    c_item: {
                        [Op.substring]: type,
                    }
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        }
        return data;
    } else if (sort == 'price-up') {
        let data;
        if (type === '2') {
            data = await Product.findAll({
                where: {
                    categoryContent: category
                }, 
                order: sequelize.col('price'),
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        } else {
            data = await Product.findAll({
                order: sequelize.col('price'),
                // offset: (page - 1) * size,
                // limit: size,
                where: {
                    c_item: {
                        [Op.substring]: type,
                    }
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        }
        return data;
    } else if (sort == 'price-down') {
        let data;
        if (type === '2') {
            data = await Product.findAll({
                order: [['price', 'DESC']],
                where: {
                    categoryContent: category
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        } else {
            data = await Product.findAll({
                // order: [[sequelize.fn('max', sequelize.col('price')), 'DESC']],
                order: [['price', 'DESC']],
                // offset: (page - 1) * size,
                // limit: size,
                where: {
                    c_item: {
                        [Op.substring]: type,
                    }
                },
                limit: Number.parseInt(size),
                offset: (page - 1) * size,
            });
        }
        return data;
    }
}

exports.search = async function (type, page, size) {
    const res = await Product.findAll({
        where: {
            title: {
                [Op.substring]: type,
            }
        },
        // limit: size != 'undefined' ? Number.parseInt(size) : 5,
        // offset: (page - 1) * size,
    })
    return res;
}
