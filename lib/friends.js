this.Friends = function() {
  this.friends = arguments
}

this.Friends.prototype.get_names = function() {
  var names, name

  names = []

  for (name in this.friends) {
    names.push(this.friends[name].get_name())
  }

  return names
}

this.Friends.prototype.find_by_name = function(name) {
  var friend

  for (friend in this.friends) {
    if (this.friends[friend].get_name() == name) {
      return this.friends[friend]
    } else {
      continue
    }
  }
}
