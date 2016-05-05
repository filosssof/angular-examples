(function() {
	'use strict';

	angular.module('app').service('XOService', XOService);

	function XOService() {
		
		var oSteps = [];
		

		return {
			isDeadHeat : isDeadHeat,
			initArray : initArray,
			verifyWinner : verifyWinner,
			aiMove : aiMove,
			verifyWinnerAndDeadHeat : verifyWinnerAndDeadHeat,
			initOSteps: initOSteps
		}
		
		function initOSteps(){
			oSteps = [];
		}

		function isDeadHeat(val) {
			for (var i = 1; i <= 9; i++) {
				if (!val['p' + i]) {
					return false;
				}
			}
			return true;
		}

		function verifyWinner(val) {
			if (areEquals(val.p1, val.p2,val.p3)) {
				return [ 'p1', 'p2', 'p3' ];
			} else if (areEquals(val.p4,val.p5,val.p6)) {
				return [ 'p4', 'p5', 'p6' ];
			} else if (areEquals(val.p7, val.p8, val.p9)) {
				return [ 'p7', 'p8', 'p9' ];
			} else if (areEquals(val.p1, val.p4, val.p7)) {
				return [ 'p1', 'p4', 'p7' ];
			} else if (areEquals(val.p2, val.p5, val.p8)) {
				return [ 'p2', 'p5', 'p8' ];
			} else if (areEquals(val.p3, val.p6, val.p9)) {
				return [ 'p3', 'p6', 'p9' ];
			} else if (areEquals(val.p1, val.p5, val.p9)) {
				return [ 'p1', 'p5', 'p9' ];
			} else if (areEquals(val.p3, val.p5,val.p7)) {
				return [ 'p3', 'p5', 'p7' ];
			} else {
				return [];
			}

		}
		
		

		function aiMove(arr, xSteps){
			var stepNum = xSteps.length;
			if (stepNum === 1) {
				firstAiMove(arr);
			}else{
				nextAiMove(arr,xSteps);
			}
			return verifyWinnerAndDeadHeat(arr);
		}
		
		function firstAiMove(arr){
			var step = 'O';
			if(!arr.p5){
				arr.p5 = step;
				oSteps.push(5);
			}else if (!arr.p1){
				arr.p1 = step;
				oSteps.push(1)
			}
		}
		
		function nextAiMove(arr,xSteps){
			var winPosition = getNextPosition(arr, oSteps);
			if(winPosition !== 0){
				arr['p' + winPosition]='O';
				oSteps.push(winPosition);
			}else{
				var alertPosition = getNextPosition(arr, xSteps);
				if(alertPosition !== 0){
					arr['p' + alertPosition]='O';
					oSteps.push(alertPosition);
				}else{
					console.log('Potential line situation');
					var potWinPos = getPotentialWinPosition(arr);
					arr['p' + potWinPos]='O';
					oSteps.push(potWinPos);
				}
			}
		}

				
		function getNextPosition(arr, xSteps) {
			if (xSteps.length == 2) {
				return getPositionForTwoPoints(arr, xSteps[0], xSteps[1]);
			}

			if (xSteps.length == 3) {
				var comp1 = getPositionForTwoPoints(arr, xSteps[0], xSteps[1]);
				var comp2 = getPositionForTwoPoints(arr, xSteps[1], xSteps[2]);
				var comp3 = getPositionForTwoPoints(arr, xSteps[0], xSteps[2]);
				if (comp1 !== 0) {
					return comp1;
				} else if (comp2 !== 0) {
					return comp2;
				} else {
					return comp3;
				}
			}

			if (xSteps.length == 4) {
				var comp1 = getPositionForTwoPoints(arr, xSteps[0], xSteps[1]);
				var comp2 = getPositionForTwoPoints(arr, xSteps[0], xSteps[2]);
				var comp3 = getPositionForTwoPoints(arr, xSteps[0], xSteps[3]);
				var comp4 = getPositionForTwoPoints(arr, xSteps[1], xSteps[2]);
				var comp5 = getPositionForTwoPoints(arr, xSteps[1], xSteps[3]);
				var comp6 = getPositionForTwoPoints(arr, xSteps[2], xSteps[3]);
				if (comp1 !== 0) {
					return comp1;
				} else if (comp2 !== 0) {
					return comp2;
				} else if (comp3 !== 0) {
					return comp3;
				} else if (comp4 !== 0) {
					return comp4;
				} else if (comp5 !== 0) {
					return comp5;
				} else {
					return comp6;
				}
			}
			return 0;
		}
		
		function getPositionForTwoPoints(arr, a, b){
			var primeArray = getPrimeArray();
			var composition = primeComposition(a, b);
			var position = primeArray[composition];
			if(position && !arr['p' + position]){
				return position;
			}
			return 0;
		}
		
		function primeComposition(a,b){
			var ap = getRelatedPrime(a);
			var bp = getRelatedPrime(b);
			return ap * bp;
		}
		
		
		function verifyWinnerAndDeadHeat(arr){
			var result = {};
			var winner = verifyWinner(arr);
			if (winner.length > 0) {
				result.gameFinished = true;
				result.message = arr[winner[0]] + ' wins';
			}else if (isDeadHeat(arr)) {
				result.gameFinished = true;
				result.message = 'It is dead heat';
			}
			return result;
		}
		
		function areEquals(a, b, c) {
			if (a === b && b === c && a!=='') {
				return true;
			} else {
				return false;
			}
		}
		
		function getPotentialWinPosition(arr){
			var potWin = getPotentialWinPositionForLine(arr,1,5,9);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
				
			}
			
			
			potWin = getPotentialWinPositionForLine(arr,3,5,7);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,1,2,3);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,4,5,6);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,7,8,9);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,1,4,7);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,2,5,8);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			potWin = getPotentialWinPositionForLine(arr,3,6,9);
			if (potWin!==0){
				console.log('Pot win is: ' + potWin);
				return potWin;
			}
			
			return 0;
			
			
		}
		
		function getPotentialWinPositionForLine(arr, a,b,c){
			if(arr['p' + a]!=='X' && arr['p' + b]!=='X' && arr['p' + c]!=='X' && (arr['p' + a]==='O' || arr['p' + b]==='O' || arr['p' + c]==='O')){
				if(arr['p' + a]==='O'){
					return b;
				}else{
					return a;
				}
			}
			return 0;
		}
		
		function getPrimeArray(){
			
			var winLines = new Object();
			
			winLines[2] = 3;
			winLines[3] = 2;
			winLines[6] = 1;
			
			winLines[35] = 6;
			winLines[77] = 4;
			winLines[55] = 5;
			
			winLines[221] = 9;
			winLines[247] = 8;
			winLines[323] = 7;
			
			winLines[5] = 7;
			winLines[13] = 4;
			winLines[65] = 1;
			
			winLines[14] = 8;
			winLines[34] = 5;
			winLines[119] = 2;
			
			winLines[33] = 9;
			winLines[57] = 6;
			winLines[209] = 3;
			
			winLines[7] = 9;
			winLines[19] = 5;
			winLines[133] = 1;
			
			winLines[21] = 7;
			winLines[39] = 5;
			winLines[91] = 3;
			
			return winLines;
			
		}
		
		function getRelatedPrime(val){
			switch (val) {
			  case 4: return 5; break;
			  case 5: return 7; break;
			  case 6: return 11; break;
			  case 7: return 13; break;
			  case 8: return 17; break;
			  case 9: return 19; break;
			  default:
			   return val;
			}
		}

		function initArray() {
			return {
				p1 : '',
				p2 : '',
				p3 : '',
				p4 : '',
				p5 : '',
				p6 : '',
				p7 : '',
				p8 : '',
				p9 : ''
			}
		}
	}
})();