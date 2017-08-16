// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

import SimpleSchema from 'simpl-schema';

clients = new Mongo.Collection('clients');

clients.allow({
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

ClientSchema = new SimpleSchema({
    "firstName": {
        type: String,
    },
    "lastName": {
        type: String
    },
    "booksOut": {
        type: Number,
    },
    "email": {
        type: String
    },
    "fines": {
        type: Number,
    }
});

clients.attachSchema(ClientSchema);
