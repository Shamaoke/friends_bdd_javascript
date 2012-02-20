require('should')

this.World = function(callback) {
  this.Friend  = require('../../lib/friend')['Friend']
  this.Friends = require('../../lib/friends')['Friends']
  callback(this)
}
