// By James Slattery (james@slattery.tech)
// For 2017-18 FBlA Season


Router.configure({
    layoutTemplate: 'base',
    notFoundTemplate: '404'
});

// URL Routes
Router.route('/', function () {
    this.render('dashboard');
    Router.onAfterAction(function () {
        document.title = "Dashboard"
    });
});

// Users
Router.route('/u/add', function () {
    this.render('new_user');
    Router.onAfterAction(function () {
        document.title = "New User"
    });
});

Router.route('/u', function () {
    this.render('users__all');
    Router.onAfterAction(function () {
        document.title = "All Users"
    });
});

Router.route('/u/:_id', function () {
    this.render('user_detail', {
        data: function () {
            return clients.findOne({ _id: this.params._id });
        }
    });
    Router.onAfterAction(function () {
        document.title = "User Overview"
    })
});
// Rentals
Router.route('/r/:_id', function () {
    this.render('rental_detail', {
        data: function () {
            return rentals.findOne({ _id: this.params._id });
        }
    });
    Router.onAfterAction(function () {
        document.title = "Rentals Overview"
    })
});



// Admin

Router.route('/admin/u/add', function () {
    this.render('new_admin_user');
    Router.onAfterAction(function () {
        document.title = "New Application User"
    });
});

// Books

Router.route('/b', function () {
    this.render('books_view_all');
    Router.onAfterAction(function () {
        document.title = "Books"
    });
});

Router.route('/b/add', function () {
    this.render('books_add');
    Router.onAfterAction(function () {
        document.title = "New Book"
    });
});

Router.route('/b/stock', function () {
    this.render('book_stock');
    Router.onAfterAction(function () {
        document.title = "Stock Alerts"
    });
});

Router.route('/b/:_id', function () {
    this.render('book_detail', {
        data: function () {
            return books.findOne({ _id: this.params._id });
        }
    });
    Router.onAfterAction(function () {
        document.title = "Book Details"
    })
});

// FAQs
///////

Router.route('/faq/teacher_vs_student', function () {
    this.render('stvste');
    Router.onAfterAction(function () {
        document.title = "Teachers VS Students"
    });
});

Router.route('/faq/rent_book', function () {
    this.render('rent_book');
    Router.onAfterAction(function () {
        document.title = "Renting a Book"
    });
});
