var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'careers';
	locals.title = 'Amerbank - Careers';
	locals.data = {
		careers: [],
	}

	view.on('init', function(next) {
		keystone.list('Career').model.find().sort('title').exec(function(err, careers) {
			if(err) {
				return next(err);
			}
			locals.data.careers = careers;
			next(err);
		});
	});

	// Render the view
	view.render('careers');
};