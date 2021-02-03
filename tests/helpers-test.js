const {
  areSimilar,
  getCodingScores,
  getCommunicationScores,
} = require('../src/helpers/helpers');
const { assert, expect } = require('chai');

const sample = [
  {
    title: 'Engineer',
    communication_score: '114028',
    coding_score: '180944',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '889',
  },
  {
    title: 'Engineer',
    communication_score: '62734',
    coding_score: '64000',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '890',
  },
  {
    title: 'Engineer',
    communication_score: '167656',
    coding_score: '231216',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '891',
  },
];

context('Helpers', () => {
  context('If two numeric values are passed in', () => {
    it('should return a boolean', () => {
      const result = areSimilar(0.678, 0.782);
      assert.typeOf(result, 'Boolean');
    });
  });
  context('If an array with correct values is passed in', () => {
    it('should return a sorted array of coding scores', () => {
      const result = getCodingScores(sample);
      expect(result).to.eql(['64000', '180944', '231216']);
    });
  });
  context('If an array with correct values is passed in', () => {
    it('should return a sorted array of communication scores', () => {
      const result = getCommunicationScores(sample);
      expect(result).to.eql(['62734', '114028', '167656']);
    });
  });
});
