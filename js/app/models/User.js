/*
	User
	user model
*/

define('models/User', function(require) {
	return function(name) {
		this.name = name || 'Default name';
	};
});