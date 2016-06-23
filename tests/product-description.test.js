describe('homepage', function(){
  it('GET description of products',function(){
    superagent
      .get('')
      .end(function(res){
        expect(res.status).to.equal(200);
        done();
      })
  })
})
