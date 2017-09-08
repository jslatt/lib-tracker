

Template.dashboard.helpers({
    book__count: function () {
        return books.find({}).count();
    },
    user__count: function () {
        return clients.find({}).count();
    },
    recent_rentals: function () {
        return rentals.find({ returned: false }, { sort: { SortDate: -1 }}, { limit: 10 });
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
