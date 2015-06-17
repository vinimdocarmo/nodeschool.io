function loadUsers(userIds, load, done) {
   var users = [];
   userIds.forEach(function(id) {
      var user = load(id);
      users.push(user);
   });
   done(users);
}
    
module.exports = loadUsers;
