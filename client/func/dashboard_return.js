Template.dashboard.helpers({
    book__count: function () {
        return books.find({}).count();
    },
    user__count: function () {
        return clients.find({}).count();
    },
    user__fines: function () {
        return clients.find({ fines: { $gt: 0 } }).count();
    }
});

Template.base.helpers({
    user__count: function () {
        return clients.find({}).count();
    }
})