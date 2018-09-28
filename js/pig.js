$(document).ready(function() {
function rollDice(){
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var heading = document.getElementById("heading");
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor( Math.random() * 6) + 1;
// math.floor  is used to round off the number passed as parameter to its nearest integer in Downward direction of rounding.
var dice_total = d1 + d2;
dice1.innerHTML = d1;
dice2.innerHTML = d2;
heading.innerHTML = "You have rolled" + dice_total+ ".";
if(d1 == d2){
heading.innerHTML += "DOUBLE! free turn!"
     }
   }
}