Template.books_add.events({
    'submit .new_book': function () {
        event.preventDefault();

        let title = $('[name="title"]').val();
        let author = $('[name="author"]').val();
        let desc = $('.desc').val();
        let stock = $('[name="stock"]').val();
        let cover = $('[name="cover"]').val();

        books.insert({
            title: title,
            author: author,
            description: desc,
            cover: cover,
            stock: stock
        });
        Router.go('/b');
    }
});