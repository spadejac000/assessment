const express = require('express');
const router = express.Router();

// data model
const Data = require('../../models/Data')

// route Get api/data
// route description: get all data
router.get('/', (req, res) => {
  Data.find()
    .then(data => res.json(data))
})


module.exports = router;