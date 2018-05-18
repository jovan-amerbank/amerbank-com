var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'fintech';
	locals.title = 'Amerbank - Fintech';
	// Render the view
	view.render('fintech');
};