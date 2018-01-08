"use-strict";
var log = console.log;
var Mf = Math.floor;
var Mr = Math.random;
var dcsA = null;
var yhA = null;
var c = null;
var r = null;
var dcsBoard = null;
var yhBoard = null;
var cD = null;
var cH = null;
var choiceBtn = null;

function initChoiceBtn(_c) {
	var container = document.querySelector(".choice-container");
	
	for (var i = 0; i < _c.length; i++) {
		var btn = document.createElement("button");
		var t = document.createTextNode(_c[i]);
		btn.appendChild(t);
		btn.className = "button-primary choice-btn";
		btn.id = _c[i].toLowerCase().replace("/", "-");
		btn.title = cTitle[i];
		btn.disabled = true;
		container.appendChild(btn);

		btn.addEventListener("click", function(_e) {
			setResult(_e.target);
		}, false);
	}
}

function initDisplBoard() {
	dcsBoard = document.querySelector("#dcs-board");
	yhBoard = document.querySelector("#yh-board");
	choiceBtn = document.querySelectorAll(".choice-btn");
}

function initIagwBtn() {
	var btn = document.querySelector("#iagw");

	btn.addEventListener("click", function(_e) {
		emptyBoard();
		cH = yhA[Mf(Mr()*yhA.length)];
		setYh(cH);
		cD = dcsA[Mf(Mr()*dcsA.length)];
		setDcs(cD);
	}, false);
}

function emptyBoard() {
	setDcs();
	setYh();

	for (var i = 0; i < choiceBtn.length; i++) {
		choiceBtn[i].disabled = false;
	}
}

function setDcs(_dcs) {
	dcsBoard.textContent = "";
	dcsBoard.textContent = _dcs;
}

function setYh(_yh) {
	yhBoard.textContent = "";
	yhBoard.textContent = _yh;
}

function setResult(_target) {
	// log(r[cH][cD]);
	var result = r[cH][cD];

	for (var i = 0; i < choiceBtn.length; i++) {
		if (choiceBtn[i].id !== result.toLowerCase().replace("/", "-")) {
			choiceBtn[i].disabled = true;
		}
	}
}


(function () {

	// Dealers card showing
	dcsA = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "a"];
	// Your hand
	yhA = [
		"8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
		"a,2", "a,3", "a,4", "a,5", "a,6", "a,7", "a,8", "a,9",
		"2,2", "3,3", "4,4", "5,5", "6,6", "7,7", "8,8", "9,9", "10,10", "a,a"
	];
	// choice
	c = ["DD", "H", "S", "P", "H/P", "H/R"];
	cTitle = ["Double Down", "Hit", "Stand", "Split", "Split if allowed to double afterwards, otherwise Hit", "Surrender if allowed, otherwise Hit"];
	// results
	r = {
		[yhA[0]]: { // 8
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[1],
			[dcsA[3]]: c[1],
			[dcsA[4]]: c[1],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[1]]: { // 9
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[2]]: { // 10
			[dcsA[0]]: c[0],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[0],
			[dcsA[6]]: c[0],
			[dcsA[7]]: c[0],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[3]]: { // 11
			[dcsA[0]]: c[0],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[0],
			[dcsA[6]]: c[0],
			[dcsA[7]]: c[0],
			[dcsA[8]]: c[0],
			[dcsA[9]]: c[1]
		},
		[yhA[4]]: { // 12
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[5]]: { // 13
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[6]]: { // 14
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[7]]: { // 15
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[5],
			[dcsA[9]]: c[1]
		},
		[yhA[8]]: { // 16
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[5],
			[dcsA[8]]: c[5],
			[dcsA[9]]: c[5]
		},
		[yhA[9]]: { // 17
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[2],
			[dcsA[7]]: c[2],
			[dcsA[8]]: c[2],
			[dcsA[9]]: c[2]
		},
		[yhA[10]]: { // A,2
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[1],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[11]]: { // A,3
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[1],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[12]]: { // A,4
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[13]]: { // A,5
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[14]]: { // A,6
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[15]]: { // A,7
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[2],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[16]]: { // A,8
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[2],
			[dcsA[7]]: c[2],
			[dcsA[8]]: c[2],
			[dcsA[9]]: c[2]
		},
		[yhA[17]]: { // A,9
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[2],
			[dcsA[7]]: c[2],
			[dcsA[8]]: c[2],
			[dcsA[9]]: c[2]
		},
		[yhA[18]]: { // 2,2
			[dcsA[0]]: c[4],
			[dcsA[1]]: c[4],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[3],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[19]]: { // 3,3
			[dcsA[0]]: c[4],
			[dcsA[1]]: c[4],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[3],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[20]]: { // 4,4
			[dcsA[0]]: c[1],
			[dcsA[1]]: c[1],
			[dcsA[2]]: c[1],
			[dcsA[3]]: c[4],
			[dcsA[4]]: c[4],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[21]]: { // 5,5
			[dcsA[0]]: c[0],
			[dcsA[1]]: c[0],
			[dcsA[2]]: c[0],
			[dcsA[3]]: c[0],
			[dcsA[4]]: c[0],
			[dcsA[5]]: c[0],
			[dcsA[6]]: c[0],
			[dcsA[7]]: c[0],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[22]]: { // 6,6
			[dcsA[0]]: c[4],
			[dcsA[1]]: c[3],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[1],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[23]]: { // 7,7
			[dcsA[0]]: c[3],
			[dcsA[1]]: c[3],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[3],
			[dcsA[6]]: c[1],
			[dcsA[7]]: c[1],
			[dcsA[8]]: c[1],
			[dcsA[9]]: c[1]
		},
		[yhA[24]]: { // 8,8
			[dcsA[0]]: c[3],
			[dcsA[1]]: c[3],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[3],
			[dcsA[6]]: c[3],
			[dcsA[7]]: c[3],
			[dcsA[8]]: c[3],
			[dcsA[9]]: c[3]
		},
		[yhA[25]]: { // 9,9
			[dcsA[0]]: c[3],
			[dcsA[1]]: c[3],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[3],
			[dcsA[7]]: c[3],
			[dcsA[8]]: c[2],
			[dcsA[9]]: c[2]
		},
		[yhA[26]]: { // 10,10
			[dcsA[0]]: c[2],
			[dcsA[1]]: c[2],
			[dcsA[2]]: c[2],
			[dcsA[3]]: c[2],
			[dcsA[4]]: c[2],
			[dcsA[5]]: c[2],
			[dcsA[6]]: c[2],
			[dcsA[7]]: c[2],
			[dcsA[8]]: c[2],
			[dcsA[9]]: c[2]
		},
		[yhA[27]]: { // A,A
			[dcsA[0]]: c[3],
			[dcsA[1]]: c[3],
			[dcsA[2]]: c[3],
			[dcsA[3]]: c[3],
			[dcsA[4]]: c[3],
			[dcsA[5]]: c[3],
			[dcsA[6]]: c[3],
			[dcsA[7]]: c[3],
			[dcsA[8]]: c[3],
			[dcsA[9]]: c[3]
		}
	};
	/* for (var i = 0; i < yhA.length; i++) { log("[yhA["+ i +"]]: { "); for (var j = 0; j < dcsA.length; j++) { log("[dcsA["+ j +"]]: c[]",); } log("},"); } */

	// initFunction
	initChoiceBtn(c);
	initDisplBoard();
	initIagwBtn();
})();