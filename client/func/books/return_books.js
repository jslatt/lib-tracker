Template.books_view_all.helpers({
    'all_books': function () {
        return books.find({});
    }
});