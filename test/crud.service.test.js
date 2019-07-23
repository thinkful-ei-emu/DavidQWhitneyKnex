const app = require('../app');

describe('service connects to database',()=>{
  it('returns an array of objects from server',()=>{
    return request(app).get('/search')
      .expect(res=>{
        expect(200);
        expect(res.body).to.be.an('array');
      });
  });
});