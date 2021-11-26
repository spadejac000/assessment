const express = require('express');
const router = express.Router();

// data model
const Data = require('../../models/Data')

// route Get api/data
// route description: get all data
router.get('/', async (req, res) => {
  Data.countDocuments({name: "data"})
    .then(count => console.log('here is the count of entities: ', count));
  Data.find()
    .then(data => res.json(data))
    
})


module.exports = router;