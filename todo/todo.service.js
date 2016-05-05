/**
 * Main service for handling requests from view
 */
(function() {
	'use strict';
	angular.module('app').service('ToDoService', ToDoService);
	ToDoService.$inject = ['JsonService'];

	function ToDoService(JsonService) {

		return {
			deleteScope : deleteScope,
			submitScope : submitScope,
			changeState : changeState,
			getData : getData
		}

		function getData() {
			var todos = JsonService.getData();
			return todos;
		}
		
		function deleteScope(arr, scope) {
			arr.splice(findElementByScope(arr, scope), 1);
			JsonService.setData(arr);
		}

		function submitScope(arr, scope, tillDate) {
			var newTodo = {};
			newTodo.name = scope;
			newTodo.reached = false;
			newTodo.tillDate = tillDate;
			arr.push(newTodo);
			JsonService.setData(arr);
		}

		function changeState(arr, scope,isReached) {
			var todo = {};
			var index = findElementByScope(arr, scope);
			todo = arr[index];
			todo.reached = isReached;
			JsonService.setData(arr);
		}

		function findElementByScope(arr, scope) {
			for (var i = arr.length; i--;) {
				if (arr[i].name == scope) {
					return i;
				}
			}
			return -1;
		}
	}
})();