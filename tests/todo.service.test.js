(function() {
	'use strict';

	describe('Service: ToDoService', function() {
		beforeEach(module('app'));

		var mockJsonService;
		var mockTodoList = [];
		var testScopeName = 'Test scope';
		var tillDate = '16/07/2016';

		beforeEach(function() {

			mockJsonService = {
				getData : function() {
					return mockTodoList;
				},
				setData : function(val) {
					mockTodoList = val;
				}
			};

			module(function($provide) {
				$provide.value('JsonService', mockJsonService);
			});
		});

		it('add new scope', inject(function(ToDoService) { //parameter name = service name
			ToDoService.submitScope(mockTodoList, testScopeName,tillDate);
			expect(mockTodoList.length).toEqual(1);
			expect(mockTodoList[0].name === testScopeName);
			expect(mockTodoList[0].reached === false);
			expect(mockTodoList[0].tillDate === tillDate);
		}));

		it('change scope', inject(function(ToDoService) {
			ToDoService.changeState(mockTodoList, testScopeName);
			expect(mockTodoList[0].reached === true);
		}));

		it('delete scope', inject(function(ToDoService) {
			ToDoService.deleteScope(mockTodoList, testScopeName);
			expect(mockTodoList.length).toEqual(0);
		}));
	});
})();