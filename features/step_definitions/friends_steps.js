module.exports = function() {
  this.env   = require('../support/env')
  this.World = this.env['World']

  this.Given(/^the following friends exist: "([^"]*)", "([^"]*)"$/, function(name_1, name_2, callback) {
    var Friend = this.Friend
    this.friend_1 = new Friend(name_1)
    this.friend_2 = new Friend(name_2)
    callback()
  })

  this.Given(/^the following friend exists: "([^"]*)"$/, function(name, callback) {
    var Friend = this.Friend
    this.friend = new Friend(name)
    callback()
  })

  this.When(/^I create friend with name "([^"]*)"$/, function(name, callback) {
    var Friend = this.Friend
    this.friend = new Friend(name)
    callback()
  })

  this.When(/^I create a friends collection$/, function(callback) {
    var Friends = this.Friends
    this.friends = new Friends(this.friend_1, this.friend_2)
    callback()
  })

  this.When(/^I change the friend's name to "([^"]*)"$/, function(name, callback) {
    this.friend.change_name('Ross')
    callback()
  })

  this.When(/^I change the name "([^"]*)" to "([^"]*)"$/, function(name_before, name_after, callback) {
    this.friends.find_by_name(name_before).change_name(name_after)
    callback()
  })

  this.Then(/^the friend should have name "([^"]*)"$/, function(name, callback) {
    this.friend.get_name().should.eql(name)
    callback()
  })

  this.Then(/^the collection should contain "([^"]*)"$/, function(name, callback) {
    this.friends.get_names().should.include(name)
    callback()
  })

  this.Then(/^the collection should not contain "([^"]*)"$/, function(name, callback) {
    this.friends.get_names().should.not.include(name)
    callback()
  })
}
