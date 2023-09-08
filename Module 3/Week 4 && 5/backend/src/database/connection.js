const { Sequelize } = require('sequelize')
const databaseconfig = require('../config/database.config')

const connection = new Sequelize(databaseconfig)

module.exports = { connection }
