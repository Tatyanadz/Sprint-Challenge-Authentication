const jwt = require("jsonwebtoken")
const private = require("../config/private")

function getToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    }
    const token = jwt.sign(payload, private.jwtPrivate)
    return token
}

module.exports = getToken