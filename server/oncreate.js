// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season


// Links the extra profile fields to the Users() collection
Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile || {};
  user.profile.booksOut = options.booksOut;
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;

  const id = Meteor.userId();
  const role = options.role;

  Roles.addUsersToRoles(id , [role]);

  return user;
});
