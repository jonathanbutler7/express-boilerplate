const app = require('../src/app');
const knex = require('knex');
const { DATABASE_URL } = require('../src/config');
const supertest = require('supertest');

const test = supertest(app);
context('Scores endpoint', () => {
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
        codingPercentile: 67.74193548387096,
        communicationPercentile: 48.38709677419355,
        asComparedTo: 31,
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

context('Scores endpoint is not running', () => {
  it('GET responds with 404 and an error', () => {
    return test.get('/scores').expect(404);
  });
});
