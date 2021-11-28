const express = require('express');
const router = express.Router();

// data model
const Data = require('../../models/Data')

// route Get api/data
// route description: get all data
router.get('/', async (req, res) => {

  console.log('here is the req.query: ', Object.keys(req.query)[0])
  const keyword = Object.keys(req.query)[0] ? 
    {"$or": [
      {_id: {$regex: Object.keys(req.query)[0].toString(), $options: 'i'}},
      {SCHEDULED_END_DATE: {$regex: Object.keys(req.query)[0].toString(), $options: 'i'}},
      {INFRASTRUCTURE_CHANGE_ID: {$regex: Object.keys(req.query)[0].toString(), $options: 'i'}},
      {New_DepVar: {$regex: Object.keys(req.query)[0].toString(), $options: 'i'}},
      {SUBMITTER: {$regex: Object.keys(req.query)[0], $options: 'i'}},
      {OCC_CR_Flag: {$regex: Object.keys(req.query)[0].toString(), $options: 'i'}}
      ]
    }
   : {}

  console.log('here is the backend key word: ', keyword)

  const data = await Data.find({...keyword})
  console.log('backend data: ', data)
  res.json(data)
})


module.exports = router;