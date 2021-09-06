const { DataTypes } = require('sequelize');
const sequelize = require('./init.js');
// console.log(sequelize);
const List = sequelize.define('List', {
    //一级标题名称
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //一级标题类型
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtype: {
        type: DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false
})

// List.sync({ alter: true })
exports.List = List;