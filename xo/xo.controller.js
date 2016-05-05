(function() {
	'use strict';

	angular.module('app').controller('XOController', XOController);
	XOController.$inject = [ 'XOService' ];

	function XOController(XOService) {
		var vm = this;

		vm.clickCell = clickCell;
		vm.newGame = newGame;
		
		vm.pos = XOService.initArray();
		vm.message = '';

		var isXStep = true;
		var gameFinished = false;
		var xSteps = [];

		function clickCell(val) {
			
			if (!vm.pos['p' + val] && !gameFinished) {
				xSteps.push.apply(xSteps,[val]);
				console.log(xSteps);
				var step = isXStep ? 'X' : 'O';
				isXStep = !isXStep;
				vm.pos['p' + val] = step;
				var result = XOService.verifyWinnerAndDeadHeat(vm.pos);
				processResult(result)
				result = XOService.aiMove(vm.pos, xSteps);
				processResult(result)
				isXStep = !isXStep;
				
			}
		}
		
		function processResult(result){
			if(result && result.message){
				vm.message = result.message;
				vm.gameFinished = result.gameFinished;
			}
		}

		function newGame() {
			vm.pos = XOService.initArray();
			isXStep = true;
			vm.message = '';
			gameFinished = false;
			xSteps = [];
			XOService.initOSteps();
		}

	}
})();