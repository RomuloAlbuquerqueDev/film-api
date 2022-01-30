const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'postgres://postgres:1010@localhost:5432/film-api'
	);
module.exports = sequelize;