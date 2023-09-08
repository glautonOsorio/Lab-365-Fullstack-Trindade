const bcrypt = require('bcrypt')

function encryptPassword(user) {
    console.log("Tentei Encryptar!")
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8))
}

module.exports = { encryptPassword }