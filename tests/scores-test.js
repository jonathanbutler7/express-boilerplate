const app = require('../src/app');
const knex = require('knex');
const { DATABASE_URL } = require('../src/config');
const supertest = require('supertest');

context('Scores endpoint', () => {
  const test = supertest(app);
  let db = knex({ client: 'pg', connection: DATABASE_URL });

  before('make knex instance', () => {
    app.set('db', db);
  });

  context('Given there are scores in the database', () => {
    it('GET responds with 200 and all the score objects', () => {
      return test.get('/scores').expect(200);
    });
  });

  context('Given the /:candidate_id param is valid', () => {
    it('GET responds with 200 and the correct candidate', () => {
      const correctCandidate = {
        asComparedTo: 31,
        codingPercentile: 64.51612903225806,
        communicationPercentile: 45.16129032258064,
      };
      return test.get('/scores/889').expect(200, correctCandidate);
    });
  });

  context('Given the /:candidate_id param is invalid', () => {
    it('Responds with a 404 and an error message', () => {
      return test
        .get('/scores/1000')
        .expect(404, { message: `The candidate_id you requested is invalid` });
    });
  });

  after('disconnect from db', () => db.destroy());
});
