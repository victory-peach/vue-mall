const sequelize = require('../sequelize/sequelize')
const { DataTypes } = require('sequelize');
const Product = sequelize.define('Product', {
    title: {//商品标题
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {//商品描述
        type: DataTypes.STRING,
        allowNull: false

    },
    categoryContent: {
        //商品类目
        type: DataTypes.STRING,
        allowNull: false


    },
    c_item: {
        //商品子类目
        type: DataTypes.STRING,
        allowNull: false

    },
    tags:{
        type: DataTypes.STRING,
        
    },
    price: {
        //商品价格
        type: DataTypes.STRING,
        allowNull: false


    },
    price_off: {
        //商品折扣价
        type: DataTypes.STRING,
        allowNull: false


    },
    unit: {
        //商品单位
        type: DataTypes.STRING,
        allowNull: false


    },
    status: {
        //商品上架状态 0 是下架 ，1 是上架
        defaultValue: 1,
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    images: {
        //商品图片
        type: DataTypes.STRING,
        // allowNull: false,
        


    },
    inventory: {
        //商品库存量
        type: DataTypes.INTEGER,
        allowNull: false


    },
    sale: {
        //商品销量
        type: DataTypes.INTEGER,
        // allowNull: false

    },
},{
    createdAt: false,
    // updatedAt: false
})

module.exports = Product;