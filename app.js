var user = require("./lib/user");
var otherUser = require("./lib/user");

console.log(user.getName());
console.log(otherUser.getName());

user.setName("Steve");
// otherUser, not user
console.log(otherUser.getName());