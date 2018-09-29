$(document).ready(function() {
	console.log("Doc ready");
	function rollDice(){
		console.log("init");
		var dice1 = document.getElementById("dice1");
		var dice2 = document.getElementById("dice2");
		var result = document.getElementById("result");
		var d1 = Math.floor(Math.random() * 6) + 1;
		var d2 = Math.floor( Math.random() * 6) + 1;
		var dice_total = d1 + d2;

		dice1.innerHTML = d1;
		dice2.innerHTML = d2;
		result.innerHTML = "You have rolled" + dice_total+ ".";

		if(d1 == d2){
			result.innerHTML += "Double! another turn!"
	     }
	 }

	 $("#btn").click(function(){
	 	rollDice();
	 })
});	
