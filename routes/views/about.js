var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'about';
	locals.title = 'Amerbank - About Us';
	// Render the view
	view.render('about');
};