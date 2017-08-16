// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season

import SimpleSchema from 'simpl-schema';

books = new Mongo.Collection('books');

// eventually if librarian
books.allow({
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

BooksSchema = new SimpleSchema({
    "title": {
        type: String,
    },
    "description": {
        type: String
    },
    "author": {
        type: String,
    },
    "cover": {
        type: String
    },
    "stock": {
        type: Number,
    },
});

books.attachSchema(BooksSchema);
