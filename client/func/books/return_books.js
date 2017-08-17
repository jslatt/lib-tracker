Template.books_view_all.helpers({
    all_books : function () {
        return books.find({}, { limit: 8 });
    },
    inputAttributes: function () {
        return { 'class': 'easy-search-input', 'placeholder': 'Search...' };
    },
    selectedBook: function () {
        var book = BookIndex.config.mongoCollection.findOne({ __originalId: Session.get('selectedBook') });

        return book && book.title;
    },
    index: function () {
        return BookIndex;
    },
    resultsCount: function () {
        return BookIndex.getComponentDict().get('count');
    },
    showMore: function () {
        return false;
    },

    renderTmpl: () => Template.renderTemplate

});

Template.user.helpers({
    selected: function () {
        return Session.equals("selectedBook", this.__originalId) ? "selected" : '';
    },

})

Template.user.events({
    'click': function () {
        Session.set("selectedBook", this.__originalId);
    }
})


Template.book_stock.helpers({
    book_stock: function () {
        return books.find({ stock: { $lt: 20 } });
    }
});