require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(routes);

module.exports = app;
