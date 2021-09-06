const sequelize = require('./init.js');
const { DataTypes } = require('sequelize');
const Recommend = sequelize.define('Recommend', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    locationArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maxGuestNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    layoutRoom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hostAvatarUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

// Recommend.sync({ alter: true });
exports.Recommend = Recommend;