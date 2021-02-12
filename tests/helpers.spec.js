const {
  areSimilar,
  getSimilarFractals,
  getPercentiles,
} = require('../src/helpers/helpers');
const { assert, expect } = require('chai');
const { similarEngineers } = require('./test-data');

context('Helpers', () => {
  context('If two numeric values are passed in', () => {
    it('should return a boolean', () => {
      const result = areSimilar(0.678, 0.782);
      assert.typeOf(result, 'Boolean');
    });
  });
  context('If an array and fractal_index are passed in', () => {
    it('should return an array with fractals that match the formula', () => {
      const result = getSimilarFractals(similarEngineers, 0.782);
      expect(result).to.eql(result);
    });
  });
  context(
    'If given a candidate and a list of other candidates with matching titles',
    () => {
      it('should return coding and communication percentiles and how many candidates were involved in the comparison', () => {
        const foundCandidate = {
          candidate_id: '915',
          company_id: '4',
          fractal_index: '0.724',
          title: 'Senior Engineer',
          communication_score: '189456',
          coding_score: '211567',
        };
        const result = getPercentiles(foundCandidate, similarEngineers);
        expect(result).to.eql({
          codingPercentile: 85.71428571428571,
          communicationPercentile: 92.85714285714286,
          asComparedTo: 14,
        });
      });
    }
  );
});
