
//dice1//


var randomNumber = Math.floor(Math.random() * 6) + 1; 
var randomDice="images/dice"+randomNumber+".png";

var dice1 =document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomDice);



//dice2//


var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDice="images/dice"+randomNumber1+".png";


var dice2 =document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomDice);


//function//



if (randomNumber > randomNumber1) {
document.querySelector("h1").innerHTML="PLAYER 1 WINS";
    
}
else if(randomNumber < randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
    