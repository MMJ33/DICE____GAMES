var Random = Math.random() * 6 ;
Random =  Math.floor(Random + 1)   ;
console.log(Random) ;
var Randomm = Math.random() * 6 ;
Randomm =  Math.floor(Randomm + 1)   ;
console.log(Randomm) ;
switch(Random){
    case 1 : document.querySelector(".img1").src="dice1.png" ; break
    case 2 : document.querySelector(".img1").src="images/dice2.png" ;break;
    case 3 : document.querySelector(".img1").src="images/dice3.png" ;break;
    case 4 : document.querySelector(".img1").src="images/dice4.png" ;break ;
    case 5 : document.querySelector(".img1").src="images/dice5.png" ;break ;
    case 6 : document.querySelector(".img1").src="images/dice6.png" ;break ;
}
switch(Randomm){
    case 1 : document.querySelector(".img2").src="dice1.png" ; break
    case 2 : document.querySelector(".img2").src="images/dice2.png" ;break;
    case 3 : document.querySelector(".img2").src="images/dice3.png" ;break;
    case 4 : document.querySelector(".img2").src="images/dice4.png" ;break ;
    case 5 : document.querySelector(".img2").src="images/dice5.png" ;break ;
    case 6 : document.querySelector(".img2").src="images/dice6.png" ;break ;
}
if(Random>Randomm)
document.querySelector("h1").innerHTML="Player 1 Wins" ;
 else if(Random==Randomm){
    document.querySelector("h1").innerHTML="Draws" ;
}
else
document.querySelector("h1").innerHTML="Player 2 Wins" ;

