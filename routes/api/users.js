const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwtGenerator = require('../../utils/jwtGenerator')
const validInfo = require('../../middleware/validInfo')
const authorization = require('../../middleware/authorization')

// user model
const User = require('../../models/User')

// register
router.post("/register", validInfo, async (req, res) => {
  try {
    const {name, email, password} = req.body
    const user = await User.exists({ email: email });

    if(user !== false) {
      return res.status(401).json("User already exits")
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

// login
router.post("/login", validInfo, async (req, res) => {
  try {
    const {email, password} = req.body

    const user = await User.exists({ email: email });
    if(user === false) {
      return res.status(401).json("Invalid email or password")
    }
    let curUser = await User.find(
      {'email': { $in: email}}
    );
    const validPassword = await bcrypt.compare(password, curUser[0].password)
    if(!validPassword) {
      return res.status(401).json("Invalid email or password")
    }
    const token = jwtGenerator(curUser[0]._id)
    res.json({token})
  } catch (error) {
    console.error(error.message)
    res.status(500).send("server error")
  }
})

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("server error")
  }
})


module.exports = router;