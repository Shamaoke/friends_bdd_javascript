describe('Friends', function() {
  describe('get_names', function() {
    it('gets the names of the friends', function() {
      var sinon    = require('sinon')
      var Friends  = require('../lib/friends')['Friends']
      var Friend   = require('../lib/friend')['Friend']
      var chandler = new Friend('Chandler')
      var friends  = new Friends(chandler)
      var mock     = sinon.mock(chandler)

      mock.expects('get_name')
      friends.get_names()
      mock.verify()

      // or

      // var sinon   = require('sinon')
      // var Friends = require('../lib/friends')['Friends']
      // var Friend  = require('../lib/friend')['Friend']
      // var friend  = new Friend('Chandler')
      // var friends = new Friends(friend)

      // sinon.spy(friend, 'get_name')

      // friends.get_names()

      // friend.get_name.called.should.be.true
    })

    it('returns the names of the friends', function() {
      var Friends = require('../lib/friends')['Friends']
      var Friend  = require('../lib/friend')['Friend']

      var chandler = new Friend('Chandler')
      var friends  = new Friends(chandler)

      friends.get_names().should.include(chandler.get_name())
    })
  })
})
