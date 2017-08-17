Template.book_detail.events({
    'click .rent': function () {
        let bookId = Iron.Location.get().path.substring(3,20);
        let user = this.__originalId;
        let role = this.role;
        let date = moment().format('MMMM Do YYYY');
        let book_name = books.findOne({ _id: bookId }).title;

        if (role === "Student") {
            let length = 30;
        }
        if (role === "Teacher") {
            let length = 180;
        }

        rentals.insert({
            bookId: bookId,
            length: length,
            renter: user,
            book_name: book_name,
            date: date
        });

        clients.update(user, {
            $inc: { booksOut: 1 }
        });
    }
});