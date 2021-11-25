const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({
  SCHEDULED_END_DATE: {
    type: String,
    required: true
  },
  INFRASTRUCTURE_CHANGE_ID: {
    type: String,
    required: true
  },
  New_DepVar: {
    type: String,
    required: true
  },
  SUBMITTER: {
    type: String,
    required: true
  },
  OCC_CR_Flag: {
    type: String,
    required: true
  },
  APP_AG: {
    type: String,
    required: true
  },
  PredictedFlag: {
    type: String,
    required: true
  },
  ScoringDate: {
    type: String,
    required: true
  },
  STATUS_VALUE: {
    type: String,
    required: true
  },
  SUBMIT_DATE: {
    type: String,
    required: true
  },
  SCHEDULED_START_DATE: {
    type: String,
    required: true
  }
})

module.exports = Data = mongoose.model('data', DataSchema);