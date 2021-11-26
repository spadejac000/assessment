const express = require('express');
const router = express.Router();

// data model
const Data = require('../../models/Data')

// route Get api/data
// route description: get all data
router.get('/', async (req, res) => {
  let entityCount = await Data.countDocuments({name: "data"})
    .then(count => {return count});
  Data.find()
    .then(data => res.json(data))
})

router.get('/pagination', async (req, res) => {
  let data = await Data.find()
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const results = {}

  if(endIndex < await Data.countDocuments().exec()) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  if(startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }
  
  results.results = await data.slice(startIndex, endIndex)
  res.json(results)
})


module.exports = router;