const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({ url: String, text: String, id: Number}, 
  { collection : 'data' }); 

module.exports = Data = mongoose.model('data', DataSchema);