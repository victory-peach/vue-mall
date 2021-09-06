const sequelize = require('./init.js');
const { DataTypes } = require('sequelize');
const Good = sequelize.define('Good', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    commentNum: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tab: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avgPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // dealItems:{

    // }
    itemTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    itemPrice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nowPrice: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

Good.sync({ alter: true })
exports.Good = Good