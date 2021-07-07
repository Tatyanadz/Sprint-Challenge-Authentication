/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };

const jwt = require("jsonwebtoken")
const priv = require("../config/private")

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, priv.jwtPrivate, (err, decodedJwt) => {
      if (err) {
        res.status(401).json({
          message: "You shall not pass"
        })
      } else {
        req.decodedJwt = decodedJwt
        next()
      }
    })
  } else {
    res.status(401).json({
      you: "shall not pass!"
    })
  }
}