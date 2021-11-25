const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const data = require('./routes/api/data')

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// imported routes
app.use('/api/data', data)

// DB config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})