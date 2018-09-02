var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"700%2Bls.random()*700": function() { return 700+ls.random()*700 },
			"%22Start%22": function() { return "Start" },
			"ls.random()*3%2B6": function() { return ls.random()*3+6 },
			"AISprite2938": function() { return AISprite2938 },
			"ls.random()*6%2B9": function() { return ls.random()*6+9 },
			"player1run": function() { return player1run },
			"AISprite2929": function() { return AISprite2929 },
			"AISprite2926": function() { return AISprite2926 },
			"20%2Bls.random()*10": function() { return 20+ls.random()*10 },
			"ls.random()*50%2B400": function() { return ls.random()*50+400 },
			"AISprite2935": function() { return AISprite2935 },
			"420%2Bls.random()*100": function() { return 420+ls.random()*100 },
			"260%2Bls.random()*80": function() { return 260+ls.random()*80 },
			"%22key_count%22": function() { return "key_count" },
			"System.key_count": function() { return System.key_count },
			"AISprite2944": function() { return AISprite2944 },
			"ls.random()*90": function() { return ls.random()*90 },
			"System.hp": function() { return System.hp },
			"%22inground%22": function() { return "inground" },
			"ls.random()*50%2B170": function() { return ls.random()*50+170 },
			"800%2Bls.random()*100": function() { return 800+ls.random()*100 },
			"Math.random()*9": function() { return Math.random()*9 },
			"%22score_count%22": function() { return "score_count" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"ls.random()*10%2B6": function() { return ls.random()*10+6 },
			"ls.random()*300%2Bls.random()*300%2B400": function() { return ls.random()*300+ls.random()*300+400 },
			"AISprite2932": function() { return AISprite2932 },
			"System.score_count": function() { return System.score_count },
			"%22hp%22": function() { return "hp" },
			"ls.random()*9%2Bls.random()*5": function() { return ls.random()*9+ls.random()*5 }
		}
	};
	ls.Start = function() {
		return {
			"%22MainScene%22": function() { return "MainScene" }
		}
	};
})(ls || (ls = {}));