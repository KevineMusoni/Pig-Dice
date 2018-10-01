$(document).ready(function() {

function rollDice1(){
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var result1 = document.getElementById("result1");
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor( Math.random() * 6) + 1;
var dice1_total = d1;
dice1.innerHTML = d1;
dice2.innerHTML = d2;
result1.innerHTML = "You have rolled" + dice1_total+ ".";
if(d1 == d2){
result1.innerHTML += "Double! another turn!"
}
}
$("#btn1").click(function(){
rollDice1();
})

function rollDice2(){
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var result2 = document.getElementById("result2");
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor( Math.random() * 6) + 1;
var dice2_total = d2;
dice1.innerHTML = d1;
dice2.innerHTML = d2;
result2.innerHTML = "You have rolled" + dice2_total+ ".";
if(d1 == d2){
result2.innerHTML += "Double! another turn!"
}
}
$("#btn2").click(function(){
rollDice2();
})
});
