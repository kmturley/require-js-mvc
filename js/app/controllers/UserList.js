/*
	UserList
	user list controller
*/

define('controllers/UserList', function(view) {
	var view = require('views/List');
	var model;
	
	return {
		init: function() {
			var users = JSON.parse(localStorage.users);
			view.init({users:users});
		}
	}
});