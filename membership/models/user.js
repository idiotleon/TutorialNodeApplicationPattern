var assert = require("assert");
var utility = require('../lib/utilities');

/**
 * Constructor Pattern
 */
var User = function (args) {
    assert.ok(args.email, "Email is required");
    var user = {};

    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.status = args.status || "pending";
    user.signInCount = args.signInCount || 0;
    user.lastLoginAt = args.lastLogin || new Date();
    user.currentLoginAt = args.currentLoginAt || new Date();
    user.currentSessionToken = args.currentSessionToken || null;
    user.reminderSentAt = args.reminderSentAt || null;
    user.reminderToken = args.reminderToken || null;
    user.authenticationToken = args.authenticationToken || utility.randomString(12);

    return user;
};

/**
 * Factory Pattern
 * User.createEmptyUser - this is the User module
 */
/*
exports.createEmptyUser = function(args){

    var user = {};

    user.email = args.email;

    return user;
}
*/

module.exports = User;