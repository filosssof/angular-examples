/**
 * Service for calculator features
 * @author Roman Fiodorov
 */

(function() {
	'use strict';

	angular.module('app').service('CalculatorService', CalculatorService);

	function CalculatorService() {
		
		var prevValue = 0;
		var operation = '';
		var nextNumber = false;

		return {
			insertValue : insertValue,
			equals : equals,
			eraseNumber : eraseNumber,
			makeOperation : makeOperation
		}
		
		function insertValue(digit, display) {
			if (display === 0 || nextNumber) {
				prevValue = display;
				display = digit;
				nextNumber = false;
			} else {
				display = display + '' + digit;
			}
			return display;
		}
		
		function equals(display,direct) {
			if (operation === 'plus') {
				display = parseFloat(prevValue) + parseFloat(display);
			}

			if (operation === 'minus') {
				display = prevValue - display;
			}

			if (operation === 'mult') {
				display = prevValue * display;
			}

			if (operation === 'divide') {
				if (display === 0) {
					display = 'Divide by 0';
				}else{
					display = prevValue / display;	
				}
				
			}
			nextNumber = true;
			prevValue = display;
			if(direct){
				operation='';
			}
			return display;
		}
		
		function makeOperation(val, display) {
			var firstTime = (operation==='' || operation===undefined);
			var result = equals(display,false)
			operation = val;
			nextNumber = true;
			if(firstTime){
				return display;
			}else{
				return result;
			}
		}
		
		function eraseNumber(display) {
			display = 0;
			operation = '';
			return display;
		}
	}
})();