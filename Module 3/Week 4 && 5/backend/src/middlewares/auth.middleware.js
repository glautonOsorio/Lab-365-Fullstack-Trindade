const { config } = require('dotenv')
const { verify } = require('jsonwebtoken')
config()

async function auth(req, res, next) {
    try {
        const { authorization } = req.headers
        verify( authorization , process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).send({
            message: "Autenticação Falhou",
            cause: error.message
        })
    }

}

module.exports = { auth }
