const meetsFractal = [
  {
    title: 'Senior Engineer',
    communication_score: '138826',
    coding_score: '151598',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '896',
  },
  {
    title: 'Senior Engineer',
    communication_score: '196348',
    coding_score: '221857',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '897',
  },
  {
    title: 'Senior Engineer',
    communication_score: '142766',
    coding_score: '171692',
    company_id: '2',
    fractal_index: '0.782',
    candidate_id: '898',
  },
  {
    title: 'Senior Engineer',
    communication_score: '103177',
    coding_score: '149613',
    company_id: '3',
    fractal_index: '0.795',
    candidate_id: '899',
  },
  {
    title: 'Senior Engineer',
    communication_score: '61456',
    coding_score: '63922',
    company_id: '3',
    fractal_index: '0.795',
    candidate_id: '900',
  },
  {
    title: 'Senior Engineer',
    communication_score: '143908',
    coding_score: '221594',
    company_id: '3',
    fractal_index: '0.795',
    candidate_id: '901',
  },
  {
    title: 'Senior Engineer',
    communication_score: '122314',
    coding_score: '172996',
    company_id: '3',
    fractal_index: '0.795',
    candidate_id: '902',
  },
  {
    title: 'Senior Engineer',
    communication_score: '189456',
    coding_score: '211567',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '915',
  },
  {
    title: 'Senior Engineer',
    communication_score: '86598',
    coding_score: '137150',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '916',
  },
  {
    title: 'Senior Engineer',
    communication_score: '153313',
    coding_score: '193111',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '917',
  },
  {
    title: 'Senior Engineer',
    communication_score: '76857',
    coding_score: '144194',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '918',
  },
  {
    title: 'Senior Engineer',
    communication_score: '138657',
    coding_score: '178472',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '919',
  },
  {
    title: 'Senior Engineer',
    communication_score: '68158',
    coding_score: '103852',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '920',
  },
  {
    title: 'Senior Engineer',
    communication_score: '155124',
    coding_score: '177076',
    company_id: '4',
    fractal_index: '0.724',
    candidate_id: '921',
  },
];
// iterate over meetsFractal
// tally number of scores lower than candidate score
// compute the ratio of the tallied scores to the total number of similarEngineers
const candidate = {
  title: 'Senior Engineer',
  communication_score: '142766',
  coding_score: '171692',
  company_id: '2',
  fractal_index: '0.782',
  candidate_id: '898',
};
const similarEngineers = meetsFractal.length;

function howManyScoresAreLower(list, score) {
  let lower = 0;
  list.forEach((candidate) => {
    +candidate.coding_score <= score && lower++;
  });
  return lower;
}

similarEngineers;
howManyScoresAreLower(meetsFractal, +candidate.coding_score) / similarEngineers;
