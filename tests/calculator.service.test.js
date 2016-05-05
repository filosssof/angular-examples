(function(){
	'use strict';
	
	describe('Service: CalculatorService', function() {
		beforeEach(module('app'));
		
		var mockDisplay = 0;
		
		it('should perform all operations', inject(function(CalculatorService) {
			mockDisplay = CalculatorService.insertValue(5,mockDisplay);
			expect(parseInt(mockDisplay)).toEqual(5);
			mockDisplay = CalculatorService.insertValue(5,mockDisplay);
			expect(parseInt(mockDisplay)).toEqual(55);
			mockDisplay = CalculatorService.makeOperation('divide',mockDisplay);
			expect(parseInt(mockDisplay)).toEqual(55);
			mockDisplay = CalculatorService.insertValue(5,mockDisplay);
			expect(parseInt(mockDisplay)).toEqual(5);
		}));
	});
})();