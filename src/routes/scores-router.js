const express = require('express');
const RouteService = require('../route-service');
const { getPercentiles } = require('../helpers/helpers');
const table = 'score_records';
const scoresRouter = express.Router();

scoresRouter.get('/', async (req, res) => {
  const db = req.app.get('db');
  try {
    const result = await RouteService.getAll(db, table);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

scoresRouter.get('/:candidate_id', async (req, res) => {
  const db = req.app.get('db');
  const { candidate_id } = req.params;
  try {
    const promise = await RouteService.getEngineer(db, candidate_id);
    const foundCandidate = promise[0];
    if (foundCandidate === undefined) {
      throw { message: `The candidate_id you requested is invalid` };
    }
    const sameTitles = await RouteService.getScores(db, foundCandidate.title);
    const percentiles = getPercentiles(foundCandidate, sameTitles);
    res.status(200).send(percentiles);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = scoresRouter;
