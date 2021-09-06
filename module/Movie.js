const sequelize = require('./init.js');
const { DataTypes } = require('sequelize');
const Movie = sequelize.define('Movie', {
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ver: {
            type: DataTypes.STRING
        },
        flag: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false
    })
    // Movie.sync({ alter: true })
exports.Movie = Movie