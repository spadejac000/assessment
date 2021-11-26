const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwtGenerator = require('../../utils/jwtGenerator')

// user model
const User = require('../../models/User')

// route Get api/users
// route description: get all users
router.get('/', (req, res) => {
})


// register
router.post("/register", async (req, res) => {
  try {
    const {name, email, password} = req.body
    const user = await User.exists({ email: email });
    console.log('here is the user right here: ', typeof user)

    if(user !== false) {
      return res.status(401).send("User already exits")
    }
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    let newUser = await new User({
      name: name,
      email: email,
      password: bcryptPassword
    });
  
    newUser.save();
    const token = jwtGenerator(newUser._id, )
    res.json({token})
  } catch (error) {
    console.error(error.message)
    res.status(500).send("server error")
  }
})


module.exports = router;