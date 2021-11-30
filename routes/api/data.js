const express = require('express');
const router = express.Router();

// data model
const Data = require('../../models/Data')

// route Get api/data
router.get('/', async (req, res) => {
  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1

  const keyword = Object.keys(req.query)[0] !== 'pageNumber' ? 
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

  let highRiskCount = await Data.find({ "PredictedFlag": "Yes" })
  highRiskCount = highRiskCount.length
  let totalEntities = await Data.find()
  totalEntities = totalEntities.length
  const count = await Data.countDocuments({...keyword})
  const data = await Data.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))
  res.json({data, page, pages: Math.ceil(count / pageSize), totalEntities, highRiskCount})
})


module.exports = router;