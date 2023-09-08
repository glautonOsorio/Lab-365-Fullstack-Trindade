const { create, 
        findAll, 
        findOne, 
        login, 
        findCarts, 
        update, 
        updatePassword } = require('../controllers/user.controller')
const { Router } = require('express')
const { auth } = require('../middlewares/auth.middleware')


class UserRouter{
    routesFromUser() {
        const userRoutes = Router()
        userRoutes.post('/users', create)
        userRoutes.get('/users', auth , findAll)
        userRoutes.get('/users/:userId', auth, findOne)
        userRoutes.patch('/users/:userId', auth, update)
        userRoutes.post('/users/login', login)
        userRoutes.patch('/users/:userId/password', auth, updatePassword)
        userRoutes.get('/users/:userId/carts', findCarts)
        // userRoutes.get("/debug-sentry", function mainHandler(req, res) {
        //     throw new Error("My first Sentry error!");
        //   });
        return userRoutes
    }
}

module.exports = new UserRouter()