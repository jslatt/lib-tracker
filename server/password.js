Meteor.methods({
  updatePassword:function(id, password){
     Accounts.changePassword(id, password);
  }
});
