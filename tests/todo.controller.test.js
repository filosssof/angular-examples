(function() {
	'use strict';
	describe('Controller: ToDoController', function() {

		// load the main module
		beforeEach(module('app'));

		var ToDoController;
		var scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ToDoController = $controller('ToDoController', {
				$scope : scope
			});
		}));

		it('Show add form is false at start', function() {
			expect(ToDoController.show_form).toBe(false);
		});

		it('List of todos should be 0', function() {
			expect(ToDoController.todos).toBe(null);
		});

	});
})();
