const express = require('express');
const router = express.Router();

// route Get api/data
// route description: get all data
router.get('/', (req, res, next) => {
  let dataArray = []
  let cursor = db.collection('data').find()
  cursor.forEach((doc, error) => {
    assert.(null, err)
  })
})


module.exports = router;