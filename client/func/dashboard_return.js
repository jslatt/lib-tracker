Template.dashboard.helpers({
    book__count: function () {
        return books.find({}).count();
    }
});