
Template.book_detail.helpers({
    inputAttributes: function () {
        return { 'class': 'easy-search-input', 'placeholder': 'Search...' };
    },
    selectedClient: function () {
        var user = UserIndex.config.mongoCollection.findOne({ __originalId: Session.get('selectedUser') });

        return user && user.firstName && user.lastName;
    },
    index: function () {
        return UserIndex;
    },
    resultsCount: function () {
        return UserIndex.getComponentDict().get('count');
    },
    showMore: function () {
        return false;
    },

    renderTmpl: () => Template.renderTemplate

});

Template.user_b.helpers({
    selected: function () {
        return Session.equals("selectedUser", this.__originalId) ? "selected" : '';
    },

})

Template.user_b.events({
    'click': function () {
        Session.set("selectedUser", this.__originalId);
    }
})
