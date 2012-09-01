/*
	Add
	add view
*/

define('views/Add', function(require) {
	return {
		init: function(parameters) {
			var appDiv = document.getElementById('app');
			appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
		}
	}
});