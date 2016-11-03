function Player(playerMark) {
	this.playerMark = playerMark;
	this.markedSquares = 0;
}

// function Space(spaceNumber) {
// 	this.spaceNumber = spaceNumber;
// }
function Board() {
	this.spacesCondition = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	this.boardGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
	this.winningCombinations = [[1, 5, 9], [1, 2, 3], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]];
}
function Game(player1, player2, board) {
 this.player1 = player1;
 this.player2 = player2;
 this.board = board;
}

Player.prototype.getMark = function(gridMark) {
	return markedSquares;
}

function playerTurn() {
	if (i % 2 === 0) {
		player1.playerMark = "X";

	} else if (i % 2 === 1) {
		player2.playerMark = "O";
		
	}
}

var i = 2;
var playerMark = "X";
var newBoard;
var player1;
var player2;

	$(document).ready(function() {

			$("#userinfo").submit(function(event) {
				event.preventDefault();

				newBoard = new Board;
				player1 = new Player("X");
				player2 = new Player("O")


				Game();
				Board();
				Player();
				i++;
		}
});
