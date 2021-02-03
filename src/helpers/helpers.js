function areSimilar(index1, index2) {
  return Math.abs(index1 - index2) < 0.15;
}
function sort(a, b) {
  return a - b;
}
function getCodingScores(arr) {
  return arr.map((engineer) => engineer.coding_score).sort(sort);
}

function getCommunicationScores(arr) {
  return arr.map((engineer) => engineer.communication_score).sort(sort);
}

function getPercentile(arr, score) {
  return (arr.indexOf(score) + 1) / arr.length * 100;
}

function getSimilarFractals(sameTitlesArr, fractal_index) {
  return sameTitlesArr.filter((engineer) =>
    areSimilar(+fractal_index, +engineer.fractal_index)
  );
}

function getPercentiles(foundCandidate, sameTitles) {
  const meetsFractal = getSimilarFractals(sameTitles, foundCandidate.fractal_index);
  const codingScores = getCodingScores(meetsFractal);
  const communicationScores = getCommunicationScores(meetsFractal);
  const codingPercentile = getPercentile(codingScores, foundCandidate.coding_score);
  const communicationPercentile = getPercentile(communicationScores, foundCandidate.communication_score);
  const asComparedTo = meetsFractal.length;
  return { codingPercentile, communicationPercentile, asComparedTo };
}

module.exports = {
  getSimilarFractals,
  getPercentile,
  getPercentiles,
  getCommunicationScores,
  areSimilar,
  getCodingScores,
  sort,
};
