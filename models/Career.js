var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Career Model
 * ==========
 */

var Career = new keystone.List('Career', {
	map: { name: 'title' },
});

Career.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	description: {type: Types.Html, wysiwyg: true, height: 200}
});

Career.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Career.defaultColumns = 'title';
Career.register();
