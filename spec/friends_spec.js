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
    })

    it('returns the names of the friends', function() {
      var Friends = require('../lib/friends')['Friends']
      var Friend  = require('../lib/friend')['Friend']

      var chandler = new Friend('Chandler')
      var friends  = new Friends(chandler)

      friends.get_names().should.include(chandler.get_name())
    })
  })

  describe('find_by_name', function() {
    it('returns a friend', function() {
      var Friends = require('../lib/friends')['Friends']
      var Friend  = require('../lib/friend')['Friend']

      var phoebe  = new Friend('Phoebe')
      var mike    = new Friend('Mike')

      var friends = new Friends(phoebe, mike)

      friends.find_by_name('Mike').should.equal(mike)
    })
  })
})
