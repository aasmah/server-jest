const supertest  = require('supertest')
const app       = require('./http_server');
const request    =supertest(app);


it('Hello World!', done => {
    expect(1).toBe(1);
    done()
});

// describe('GET /data', () => {
//     it('responds with JSON', async () => {
//       const response = await supertest(app).get('/data');
//       expect(response.status).toBe(200);
//       expect(response.body).toEqual([]);
//     });
//   });

var server = app.listen(3000, function () {
    console.log('Running on port 3000');
});

afterAll(done => {
    server.close();
    done();

});