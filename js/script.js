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
	this.winningCombinations = [[0, 4, 8], [0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
}

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

			newBoard["winningCombinations"].forEach(function(combination){
				newBoard["spacesCondition"].forEach(function(condition) {
					if (combination === condition) {
						console.log("Win");
					}	else {
						console.log("Nothing");
					}
				})
			})


		});


});


// $(".grid").click(function() {
// 	$(this).on().find("span").text(playerTurn());
// 	$(this).off();
//
// });
