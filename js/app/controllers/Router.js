/*
	Router
	router url controller
*/

define('controllers/Router', function(require) {
	var defaultRoute = '#/list/';
	var currentHash = '';
	var routes = [
		{ url: '#/list/', target: 'UserList' },
		{ url: '#/add/', target: 'UserForm' }
	];

	function init() {
		window.location.hash = window.location.hash || defaultRoute;
		setInterval(hashCheck, 100);
	}

	function hashCheck() {
		if (window.location.hash != currentHash) {
			for (var i = 0, currentRoute; currentRoute = routes[i++];) {
				if (window.location.hash == currentRoute.url) { load(currentRoute.target); }
			}
			currentHash = window.location.hash;
		}
	}

	function load(name) {
		require(['controllers/'+name], function(target) {
			target.init();
		});
	}

	return {
		init: init
	};
});