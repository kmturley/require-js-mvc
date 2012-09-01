/*
	Main
	The main app controller
*/

define('Main', function(require) {
	var userform = require('controllers/UserForm');
	var userlist = require('controllers/UserList');
	var router = require('controllers/Router');
	var model = require('models/User');
	
	var users = [new model('Barney'), new model('Cartman'), new model('Sheldon')];
	localStorage.users = JSON.stringify(users);
	router.init();
});