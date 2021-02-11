const RouteService = {
  getAll(knex, table) {
    return knex.select('*').from(table);
  },
  getEngineer(knex, id) {
    return knex
      .from('score_records')
      .select(
        'candidate_id',
        'companies.company_id',
        'fractal_index',
        'title',
        'communication_score',
        'coding_score'
      )
      .where('candidate_id', id)
      .join(
        'companies',
        'score_records.company_id',
        '=',
        'companies.company_id'
      );
  },
  getScores(knex, title) {
    return (
      knex
        .from('score_records')
        .select(
          'title',
          'communication_score',
          'coding_score',
          'companies.company_id',
          'companies.fractal_index',
          'score_records.candidate_id'
        )
        .where('title', title)
        // .where(areSimilar(fractal_index, 'companies.fractal_index'))
        // .where(areSimilar(fractal_index, 'companies.fractal_index') === true)
        .join(
          'companies',
          'score_records.company_id',
          '=',
          'companies.company_id'
        )
        .returning('*')
    );
  },
};

module.exports = RouteService;
