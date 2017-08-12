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

Router.route('/users/new', function () {
    this.render('new_user');
    Router.onAfterAction(function () {
        document.title = "New User"
    });
});
