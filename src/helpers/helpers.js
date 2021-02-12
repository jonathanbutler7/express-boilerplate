function areSimilar(index1, index2) {
  return Math.abs(index1 - index2) < 0.15;
}

function getSimilarFractals(similarEngineers, fractal_index) {
  return similarEngineers.filter((engineer) =>
    areSimilar(+fractal_index, +engineer.fractal_index)
  );
}

function howManyCodingScoresAreLower(meetsFractal, score) {
  let lowerScores = 0;
  meetsFractal.forEach((candidate) => {
    +candidate.coding_score <= score && lowerScores++;
  });
  return lowerScores;
}
function howManyCommScoresAreLower(meetsFractal, score) {
  let lowerScores = 0;
  meetsFractal.forEach((candidate) => {
    +candidate.communication_score <= score && lowerScores++;
  });
  return lowerScores;
}

function getPercentiles(foundCandidate, similarEngineers) {
  const meetsFractal = getSimilarFractals(similarEngineers, foundCandidate.fractal_index);
  const lowerCodingScores = howManyCodingScoresAreLower(meetsFractal, +foundCandidate.coding_score);
  const lowerCommScores = howManyCommScoresAreLower(meetsFractal, +foundCandidate.communication_score);
  const asComparedTo = meetsFractal.length;
  const codingPercentile = lowerCodingScores / asComparedTo * 100;
  const communicationPercentile = lowerCommScores / asComparedTo * 100;
  return { codingPercentile, communicationPercentile, asComparedTo };
}

module.exports = {
  getSimilarFractals,
  getPercentiles,
  areSimilar,
};
