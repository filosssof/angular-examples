(function() {
	'use strict';

	angular.module('app').controller('ToDoController', ToDoController);

	function ToDoController(ToDoService) {
		var vm = this;

		vm.show_form = false;
		vm.todos = ToDoService.getData();
		vm.scope = '';

		vm.show_add = show_add;
		vm.submitScope = submitScope;
		vm.deleteScope = deleteScope;
		vm.changeState = changeState;

		function show_add() {
			vm.show_form = true;
		}

		function submitScope() {
			ToDoService.submitScope(vm.todos, vm.scope, vm.tillDate);
			vm.show_form = false;
			vm.scope = '';
		}

		function deleteScope(scope) {
			ToDoService.deleteScope(vm.todos, scope);
		}

		function changeState(scope,isReached) {
			ToDoService.changeState(vm.todos, scope,isReached);
		}
	}
})();