function areSimilar(index1, index2) {
  return Math.abs(index1 - index2) < 0.15;
}

// function getPercentile(arr, score) {
//   return ((arr.indexOf(score) + 1) / arr.length) * 100;
// }

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
  const codingPercentile = lowerCodingScores / meetsFractal.length * 100;
  const communicationPercentile = lowerCommScores / meetsFractal.length * 100;
  const asComparedTo = meetsFractal.length;
  return { codingPercentile, communicationPercentile, asComparedTo };
}

module.exports = {
  getSimilarFractals,
  // getPercentile,
  getPercentiles,
  areSimilar,
};
