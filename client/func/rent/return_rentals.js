Template.user_detail.helpers({
    user_rentals: function () {
        user = this._id;

        return rentals.find({ renter: user, returned: false });
    }
});

Template.rental_detail.helpers({
    name: function () {
        let user = this.renter;
        let first = clients.findOne({ _id: user }).firstName;
        let last = clients.findOne({ _id: user }).lastName;
        let full = first + " " + last;

        return full;

    }
});

Template.rental_detail.events({
    'click .mar': function () {
        rentals.update(this._id, {
            $set: {
                returned: true
            }
        });
        books.update(this.bookId, {
          $inc: { stock: 1 }
        })
        clients.update(this.renter, {
          $inc: { booksOut: -1 }
        })
    }
});
