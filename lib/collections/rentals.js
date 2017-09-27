// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

import SimpleSchema from 'simpl-schema';

rentals = new Mongo.Collection('rentals');

rentals.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return true;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

RentalsSchema = new SimpleSchema({
    "bookId": {
        type: String,
    },
    "book_name": {
        type: String,
    },
    "length": {
        type: Number
    },
    "date": {
        type: String,
    },
    "SortDate": {
      type: Date,
    },
    "momentDate": {
        type: String,
    },
    "renter": {
        type: String
    },
    "returned": {
        type: Boolean,
        defaultValue: false
    }
});

rentals.attachSchema(RentalsSchema);
