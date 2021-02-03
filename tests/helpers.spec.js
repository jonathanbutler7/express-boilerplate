const {
  areSimilar,
  getCodingScores,
  getCommunicationScores,
  sort,
  getPercentile,
  getSimilarFractals,
  getPercentiles,
} = require('../src/helpers/helpers');
const { assert, expect } = require('chai');
const { sameTitles, smallSample } = require('./test-data');

context('Helpers', () => {
  context('If two numeric values are passed in', () => {
    it('should return a boolean', () => {
      const result = areSimilar(0.678, 0.782);
      assert.typeOf(result, 'Boolean');
    });
  });
  context('If an array with correct values is passed in', () => {
    it('should return a sorted array of coding scores', () => {
      const result = getCodingScores(smallSample);
      expect(result).to.eql(['64000', '180944', '231216']);
    });
  });
  context('If an array with correct values is passed in', () => {
    it('should return a sorted array of communication scores', () => {
      const result = getCommunicationScores(smallSample);
      expect(result).to.eql(['62734', '114028', '167656']);
    });
  });
  context('If an array is passed in', () => {
    it('should return a sorted array', () => {
      const result = [3, 2, 1].sort(sort);
      expect(result).to.eql([1, 2, 3]);
    });
  });
  context('If an array and the top score are passed in', () => {
    it('should return a value of 100', () => {
      const result = getPercentile([1, 2, 3, 4, 5, 6, 7], 7);
      expect(result).to.eql(100);
    });
  });
  context('If an array and the bottom score are passed in', () => {
    it('should return a value of 10', () => {
      const result = getPercentile([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
      expect(result).to.eql(10);
    });
  });
  context('If an array and fractal_index are passed in', () => {
    it('should return an array with fractals that match the formula', () => {
      const result = getSimilarFractals(sameTitles, 0.782);
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
        const result = getPercentiles(foundCandidate, sameTitles);
        expect(result).to.eql({
          codingPercentile: 85.71428571428571,
          communicationPercentile: 92.85714285714286,
          asComparedTo: 14,
        });
      });
    }
  );
});
