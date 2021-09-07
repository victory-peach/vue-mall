const sequelize = require('../sequelize/sequelize.js');
const { DataTypes } = require('sequelize');
const Category = sequelize.define('Category',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    c_items:{
        type:DataTypes.STRING,
        allowNull:false
    },
    _id:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Category

