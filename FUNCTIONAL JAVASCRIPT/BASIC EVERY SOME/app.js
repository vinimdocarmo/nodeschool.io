function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        //verify wheter all the submitted users exist in the good users
        return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
                return submittedUser.id === goodUser.id;
            });
        })
    };
}
   
module.exports = checkUsersValid;

