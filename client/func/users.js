// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

Template.new_user.events({
    'submit form': function () {
        event.preventDefault();

        let firstName = $('[name="firstName"]').val();
        let lastName = $('[name="lastName"]').val();
        let role = $('.role').val();
        let booksOut = 0;
        let fines = 0;

        clients.insert({
            firstName: firstName,
            lastName: lastName,
            role: role,
            booksOut: booksOut,
            fines: fines
        });

        Router.go('/u');
    }

});

Template.user_detail.events({
  'click .is-submit' : function () {
    let FirstName = $('[name="newFname"]').val();
    let LastName = $('[name="newLname"]').val();

    clients.update(this._id, {
        $set: {
            firstName: FirstName,
            lastName: LastName
        }
    });

  },
  'click .admin-clearFines' : function () {
    clients.update(this._id, {
        $set: {
            fines: 0
        }
    });
  },
  'click .admin-delU' : function () {
    clients.remove(this._id);
    Router.go('/u');
  },
  'click .fine' : function () {
    let amt = $('[name="fineAmt"]').val();

    clients.update(this._id, {
      $inc: {
        fines: amt
      }
    });

    $('[name="fineAmt"]').val("")

  }
});


Template.users__all.helpers({
    all_users : function () {
        return clients.find({}, { limit: 50 });
    }
});
