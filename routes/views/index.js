var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		posts: []
	};

	view.on('init', function (next) {

		var keystone = require('keystone'),
		Post = keystone.list('Post');
	 
		Post.model.find()
			.where('state', 'published')
			.populate('author')
			.sort('-publishedAt')
			.limit(3)
			.exec(function(err, posts) {
				locals.data.posts = posts;
				next(err);
			});
	});

	// Render the view
	view.render('index');
};