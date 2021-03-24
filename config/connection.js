const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('its_a_techBlog_db', 'root', 'Iaabmc88', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});


module.exports = sequelize;
