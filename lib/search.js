// Book Serach
//////////////

BookIndex = new EasySearch.Index({
    engine: new EasySearch.MongoDB({
        selector: function (searchObject, options, aggregation) {
            let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

            return selector;
        }
    }),
    collection: books,
    fields: ['title'],
    defaultSearchOptions: {
        limit: 10
    },
    permissons: () => {
        return true;
    }
})

// User Search
//////////////

UserIndex = new EasySearch.Index({
    engine: new EasySearch.MongoDB({
        selector: function (searchObject, options, aggregation) {
            let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

            return selector;
        } 
    }),
    collection: clients,
    fields: ['firstName', 'lastName'],
    defaultSearchOptions: {
        limit: 20
    },
    permissions: () => {
        return true;
    }
})