(function(){
	'use strict';
	
	angular.module('app').controller('NavController', NavController);
	
	function NavController($location){
		var vm = this;
		vm.goToPage = goToPage;
		
		function goToPage(page){
			$location.path('/' + page);
		}
	}
	
})();