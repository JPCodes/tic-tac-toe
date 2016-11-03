function Player(playerMark) {
	this.playerMark = playerMark;
	this.markedSquares = 0;
}

// function Space(spaceNumber) {
// 	this.spaceNumber = spaceNumber;
// }
function Board() {
	this.spacesCondition = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	this.boardGrid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
}

var win1 = "048";
var win2 = "012";
var win3 = "036";
var win4 = "147";
var win5 = "258";
var win6 = "246";
var win7 = "345";
var win8 = "678";

function Game(player1, player2, board) {
 this.player1 = player1;
 this.player2 = player2;
 this.board = board;
}

Board.prototype.getMark = function(gridMark) {
	return newBoard.spacesCondition[gridMark];
}

Board.prototype.modifySpace = function(markPosition) {
	if (i % 2 === 0) {
		this.spacesCondition[markPosition] = player1.playerMark;
	} else if (i % 2 === 1) {
		this.spacesCondition[markPosition] = player2.playerMark;
	}
}

var arrayX = [];

var winnerCheck = function(board) {
	debugger;

	for (i = 0; i < newBoard["spacesCondition"].length; i++) {

		if (newBoard.spacesCondition[i] === "X") {
			arrayX.push(newBoard.spacesCondition.indexOf("X", i));
		}
	}

	board = arrayX.join("");

var win1 = "048";
var win2 = "012";
var win3 = "036";
var win4 = "147";
var win5 = "258";
var win6 = "246";
var win7 = "345";
var win8 = "678";

var somethingVar = "";
var somethingVar2 = "";
var somethingVar3 = "";
var somethingVar4 = "";
var somethingVar5 = "";
var somethingVar6 = "";
var somethingVar7 = "";
var somethingVar8 = "";

for (i = 0; i < win1.length; i++) {
  if (win1[i] > -1){
    somethingVar += board.indexOf(win1[i]);
  }
}

for (i = 0; i < win2.length; i++) {
  if (win2[i] > -1){
    somethingVar2 += board.indexOf(win2[i]);
  }
}

for (i = 0; i < win3.length; i++) {
  if (win3[i] > -1){
    somethingVar3 += board.indexOf(win3[i]);
  }
}

for (i = 0; i < win4.length; i++) {
  if (win4[i] > -1){
    somethingVar4 += board.indexOf(win4[i]);
  }
}

for (i = 0; i < win5.length; i++) {
  if (win5[i] > -1){
    somethingVar5 += board.indexOf(win5[i]);
  }
}

for (i = 0; i < win6.length; i++) {
  if (win6[i] > -1){
    somethingVar6 += board.indexOf(win6[i]);
  }
}

for (i = 0; i < win7.length; i++) {
  if (win7[i] > -1){
    somethingVar7 += board.indexOf(win7[i]);
  }
}

for (i = 0; i < win8.length; i++) {
  if (win8[i] > -1){
    somethingVar8 += board.indexOf(win8[i]);
  }
}

if (somethingVar.indexOf("-") < 0 || somethingVar2.indexOf("-") < 0 || somethingVar3.indexOf("-") < 0 || somethingVar4.indexOf("-") < 0 || somethingVar5.indexOf("-") < 0 || somethingVar6.indexOf("-") < 0 || somethingVar7.indexOf("-") < 0 || somethingVar8.indexOf("-") < 0) {
  console.log("Win");
} else {
  console.log("No win")
}

}

// Board.prototype.getX = function() {
// debugger;
// var arrayX = [];
//
// 	for (i = 0; i < this["spacesCondition"].length; i++) {
//
// 		if (this.spacesCondition[i] === "X") {
// 			arrayX.push(this.spacesCondition.indexOf("X", i));
// 		}
// 	}
//
// 	var arrayXStr = arrayX.join("");
//
// 	for (i = 0; i < arrayXStr.length; i++) {
// 		console.log(arrayXStr.indexOf(this.winningCombinations[i][i]));
// 	}
//
// 	return arrayX;
// }
//
// Board.prototype.getO = function(spacesCond) {
// 	var arrayO = [];
// 	arrayX.push(this.spacesCond === "O");
// 	return arrayO;
// }

function playerTurn() {
	if (i % 2 === 0) {
		i++;
		return player1.playerMark;
	} else if (i % 2 === 1) {
		i++;
		return player2.playerMark;
	}
}

var i = 2;
var playerMark = "X";
var newBoard;
var player1;
var player2;
var spaceSpot;

	$(document).ready(function() {

			$("#play").click(function(event) {
				event.preventDefault();
				$(".board").show();

				newBoard = new Board;
				player1 = new Player("X");
				player2 = new Player("O")

		});

		$(".grid").click(function() {
			spaceSpot = parseInt($(this).attr("id")); // 0-8
			if (newBoard.spacesCondition[spaceSpot] === 0) {
				newBoard.modifySpace(spaceSpot);
				$(this).find("span").text(playerTurn());
			}	else if (newBoard.spacesCondition[spaceSpot] === true) {
				alert("Space is taken");
			}

		});

		$("#didIwin").click(function() {
			debugger;
			var boardCond = newBoard.spacesCondition;
			winnerCheck(boardCond);
			//
			// newBoard["winningCombinations"].forEach(function(combination){
			//
			// 	var currentCombination = combination.join("");
			// 	var findXs = newBoard.getX().join("");
			// 		if (currentCombination === findXs) {
			// 			console.log("Win");
			// 		}	else if (currentCombination !== newBoard.spacesCondition) {
			// 			console.log("Nothing");
			// 		}
			//
			// })

		})


});

// 0, 4, 8 to string, winningCombinations
// indexOf(0, 4, 8);
// 0, 3, 4, 8 to string, boards
// 1, -1, 1, 1
// remove all -1
//
// 048 === 048; yes

// var blah = winnningCombinations.join("");
// var maxfilter = blah.indexOf();
// maxfilter.remove(-1);
// if maxfilter[i] > 2 {
// 	alert("win win win");
// }
