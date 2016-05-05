/**
 * Module for reading JSON data from file
 */

(function() {
	'use strict';
	angular.module('app').service('JsonService', JsonService);

	function JsonService($window) {

		init();
		return {setData : setData,
				getData : getData}
		
		function init(){
			angular.element($window).on('storage', function(event) {
				if (event.key === 'todo-storage') {
					$rootScope.$apply();
				}
			});
		}
		
		function setData(val) {
			$window.localStorage && $window.localStorage.setItem('todo-storage', angular.toJson(val));
			return this;
		}
		
		function getData() {
			var json = $window.localStorage	&& $window.localStorage.getItem('todo-storage');
			return angular.fromJson(json);
		}
	}
})();