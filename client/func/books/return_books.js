Template.books_view_all.helpers({
    'all_books': function () {
        return books.find({});
    }
});

Template.book_stock.helpers({
    book_stock: function () {
        return books.find({ stock: { $lt: 20 } });
    }
});