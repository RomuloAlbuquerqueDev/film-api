const Sequelize = require('sequelize');
const database = require('../../config/database/database');

const Film = database.define('film', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    director: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Film;