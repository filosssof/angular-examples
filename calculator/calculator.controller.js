(function() {
	'use strict';

	angular.module('app').controller('CalculatorController',
			CalculatorController);

	CalculatorController.$inject = [ 'CalculatorService' ];

	function CalculatorController(CalculatorService) {
		var vm = this;

		vm.display = 0;
		vm.func = makeOperation;
		vm.insertValue = insertValue;
		vm.erase = eraseNumber;
		vm.equals = equals;

		function insertValue(digit) {
			vm.display = CalculatorService.insertValue(digit, vm.display);
		}

		function eraseNumber() {
			vm.display = CalculatorService.eraseNumber(vm.display);
		}

		function equals() {
			vm.display = CalculatorService.equals(vm.display,true);
		}

		function makeOperation(val) {
			vm.display = CalculatorService.makeOperation(val,vm.display);
		}
	}
})();