/*
	UserForm
	user form controller
*/

define('controllers/UserForm', function(require) {
	var view = require('views/Add');
	var model = require('models/User');
	
	return {
		init: function() {
			view.init();
			document.getElementById('add').addEventListener('click', function(){
				var users = JSON.parse(localStorage.users);
				var userName = document.getElementById('user-name').value;
				users.push(new model(userName));
				localStorage.users = JSON.stringify(users);
				window.location.hash = '#/list/';
			}, false);
		}
	};
});