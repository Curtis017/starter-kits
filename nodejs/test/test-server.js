var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Server', function() {
  it('should return 200 on GET to home page', function(done){
    chai.request(server)
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it("should return 200 on GET to users page", function(done){
    chai.request(server)
    .get('/users')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });
  it('should return 404 on any other request', function(done){
    chai.request(server)
    .get('/unknown')
    .end(function(err, res){
      res.should.have.status(404);
      done();
    });
  });
});
