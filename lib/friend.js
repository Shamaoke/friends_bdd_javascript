this.Friend = function(name) { this.name = name }

this.Friend.prototype.get_name    = function() { return this.name }
this.Friend.prototype.change_name = function(new_name) { return this.name = new_name }
