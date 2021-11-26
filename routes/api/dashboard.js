const express = require('express');
const router = express.Router();
const authorization = require('../../middleware/authorization')

// user model
const User = require('../../models/User')

router.get('/', authorization, async (req, res) => {
  try {
    const user = await User.findById(req.user)
    res.json(user.name)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("server error")
  }
    
})


module.exports = router;