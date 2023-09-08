const { create, findAll, findOne, findAllAdm, remove, restore, buyProduct} = require('../controllers/cart.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')


class CartRouter{
    routesFromCart() {
        const cartRoutes = Router()
        cartRoutes.post('/carts', auth, create)
        cartRoutes.get('/carts', auth , findAll)
        cartRoutes.get('/carts/:cartId', auth, findOne)
        cartRoutes.get('/cartsAdm/', auth, findAllAdm)
        cartRoutes.delete('/carts/:cartId/remove', auth, remove)
        cartRoutes.post('/carts/:cartId/restore', auth, restore)
        cartRoutes.post('/carts/buy', auth, buyProduct)


        return cartRoutes
    }
}

module.exports = new CartRouter()