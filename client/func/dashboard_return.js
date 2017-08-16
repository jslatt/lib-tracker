Template.dashboard.helpers({
    book__count: function () {
        return books.find({}).count();
    }
});

Template.base.helpers({
    user__count: function () {
        return clients.find({}).count();
    }
})