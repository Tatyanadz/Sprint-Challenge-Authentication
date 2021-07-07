require("dotenv").config()

module.exports = {
    jwtPrivate: process.env.JWT_SECRET || "keep it private"
}