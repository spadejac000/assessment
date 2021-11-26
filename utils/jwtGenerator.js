const jwt = require('jsonwebtoken')
require('dotenv').config();

function jwtGenerator(_id) {
  const payload = {
    user: _id
  }

  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: 60 * 60})
}

module.exports = jwtGenerator;