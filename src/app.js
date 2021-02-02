require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const { errorHandler } = require('./helpers/helpers');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/:candidate_id', (req, res) => {
  const { candidate_id } = req.params;
  res.send(candidate_id);
});

app.use(errorHandler);

module.exports = app;
