async function logger(req, res, next) {
    console.log('Precisamos Implementar um sistema de logs!')
    next()
}

module.exports = { logger }