const Sequelize = require('sequelize');
const db = require('../config/db')
const mysql = new Sequelize(db.database, db.username,db.password, db.option);
module.exports = mysql;
