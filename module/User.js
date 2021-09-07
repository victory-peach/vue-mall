const sequelize = require('../sequelize/sequelize.js');
const { DataTypes } = require('sequelize');
const User = sequelize.define('User',{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = User

