const { INTEGER } = require('sequelize')
const { connection } = require('../database/connection')

const ProductCart = connection.define('productCarts', {
    productId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'products'
            }
        }
    },
    cartId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'carts'
            }
        }
    },
}, {undescored: true, paranoid: true })

module.exports = { ProductCart }