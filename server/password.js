Meteor.methods({
  updatePassword({ id, password }) {
    Accounts.changePassword(id, password)
  }
});
