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
