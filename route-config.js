/**
 * Route configuration
 */
(function() {
	'use strict';
	angular.module('app').config(config);

	function config($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl : 'todo/main.html',
			controller : 'ToDoController',
			controllerAs : 'todoctrl'
		})
		.when('/calc', {
			templateUrl : 'calculator/calculator.tmpl.html',
			controller : 'CalculatorController',
			controllerAs : 'calc'
				
		})
		
		.when('/xo', {
			templateUrl : 'xo/xo.tmpl.html',
			controller : 'XOController',
			controllerAs : 'xo'
				
		})
		
		.when('/rss', {
			templateUrl : 'rss/rss.tmpl.html',
			controller : 'RssController',
			controllerAs : 'rss'

		})
		
		.otherwise({
			redirectTo : '/'
		});
	}

})();