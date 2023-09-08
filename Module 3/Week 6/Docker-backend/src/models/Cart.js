const { INTEGER, FLOAT, BOOLEAN } = require('sequelize')
const { connection } = require('../database/connection')
const { Product } = require('../models/Product')
const { ProductCart } = require('../models/ProductCart')

const Cart = connection.define('carts', {
    cartId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'users'
            }
        }
    },
    price: {
        type: FLOAT,
        allowNull: false
    },
    status: {
        type: BOOLEAN
    }
}, {undescored: true, paranoid: true })

Product.belongsToMany(Cart, { through: ProductCart, foreignKey: 'productId', as: 'carts' });
Cart.belongsToMany(Product, { through: ProductCart, foreignKey: 'cartId', as: 'products' });

ProductCart.hasMany(Cart, {foreignKey: 'cartId'})


module.exports = { Cart }