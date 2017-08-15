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

Router.route('/admin/u/add', function () {
    this.render('new_admin_user');
    Router.onAfterAction(function () {
        document.title = "New Application User"
    });
});
