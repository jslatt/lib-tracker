// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

import SimpleSchema from 'simpl-schema';

rentals = new Mongo.Collection('rentals');

rentals.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

RentalsSchema = new SimpleSchema({
    "bookId": {
        type: String,
    },
    "length": {
        type: String
    },
    "date": {
        type: Int,
    },
    "renter": {
        type: String
    }
});

rentals.attachSchema(RentalsSchema);
