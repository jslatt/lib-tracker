Template.settings.events({
  'submit .pass' : function () {
    event.preventDefault();

    let password = $('[name="new-password"]').val();
    let confirm = $('[name="new-password-confirm"]').val();
    let user = Meteor.userId();

    if (password === confirm) {
      Meteor.call('updatePassword', {
        id : user,
        password: password
      });
      console.log("Your password was changed to " + password);
    }
    else {
      console.log("The passwords did not match.");
    }
  }
});
