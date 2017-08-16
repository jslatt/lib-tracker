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

        Router.go('/u/all');
    }

});

Template.users__all.helpers({
    all_users : function () {
        return clients.find({});
    }
});
