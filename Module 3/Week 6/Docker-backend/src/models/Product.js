const { INTEGER, STRING, FLOAT } = require('sequelize')
const { connection } = require('../database/connection')

const Product = connection.define('products', {
    productId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    description: STRING,
    price: {
        type: FLOAT,
        allowNull: false
    },
    logoUrl: STRING,
    category: STRING
},{undescored: true, paranoid: true })

module.exports = { Product }