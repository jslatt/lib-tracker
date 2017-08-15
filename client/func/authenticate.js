// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
  'submit .login': function () {
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    if ( email.length() < 1 ) {
      console.log("Email Required");
    }
    if ( password.length() < 1) {
      console.log("Password Required");
    }


    Meteor.loginWithPassword(email, password);
  }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    //let firstName = $('[name="firstName"]').val();
    //let lastName = $('[name="lastName"]').val();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();
    // let role (need to config)
    Accounts.createUser({email: email, password : password});
  }
});
