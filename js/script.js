function Player(playerMark) {
	this.playerMark = playerMark;
	this.markedSquares = 0;
}


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

var winnerCheckX = function(board) {


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
	$("#winnerOutput h1").text("Winner X");
} else {
  console.log("Not winner X")
}

}

var arrayO = [];

var winnerCheckO = function(board) {


	for (i = 0; i < newBoard["spacesCondition"].length; i++) {

		if (newBoard.spacesCondition[i] === "O") {
			arrayO.push(newBoard.spacesCondition.indexOf("O", i));
		}
	}

	board = arrayO.join("");

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
	$("#winnerOutput h1").text("Winner O");
} else {
  console.log("Not winner O")
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

function playerTurn2() {
	if (i % 2 === 0) {
		return player1.playerMark;
	} else if (i % 2 === 1) {
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

			var boardCond = newBoard.spacesCondition;
			winnerCheckX(boardCond);
			winnerCheckO(boardCond);

		})


});
