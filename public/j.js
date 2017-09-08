// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

// Login Logic
Template.base.events({
    'submit .login': function () {

        event.preventDefault();
        var email = $('[name="email"]').val();
        var password = $('[name="password"]').val();


        Meteor.loginWithPassword(email, password);
    },

    // Logout Logic
    'click .logout': function () {
        Meteor.logout();
    }
})


// Register Logic
Template.register.events({
  'submit .register': function () {
    event.preventDefault();
    let email = $('[name="email"]').val();
    let password = $('[name="password"]').val();

    // Check for Empty Fields
    if (email.length() < 1 && password.length() < 1) {
      console.log("You left a field empty")
    }
    else {
      Accounts.createUser({email: email, password : password});
    }
  }
});
