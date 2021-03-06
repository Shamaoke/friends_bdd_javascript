describe('Friend', function() {
  describe('get_name', function() {
    it('returns a friend\'s name', function() {
      var Friend = require('../lib/friend')['Friend']
      var friend = new Friend('Chandler')
      friend.get_name().should.eql('Chandler')
    })
  })

  describe('change_name', function() {
    it('changes a friend\'s name', function() {
      var Friend = require('../lib/friend')['Friend']
      var friend = new Friend('Chandler')
      friend.change_name('Ross').should.eql('Ross')
    })
  })
})
