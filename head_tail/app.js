var Player1Name = prompt("Please Enter Player 1 Name : ")
var Player2Name = prompt("Please Enter Player 2 Name : ")

document.getElementById("player1").innerText = "Player1 : " + Player1Name;
document.getElementById("player2").innerText = "Player2 : " + Player2Name;

// Random number for head and tail

var ranNum = Math.floor(Math.random() * 2) + 1;
console.log(ranNum);
var choosePlayer1;
var choosePlayer2;
switch (ranNum) {
    case 1:
        alert(Player1Name + " you Choose Head or Tail");
        choosePlayer1 = prompt("First " + Player1Name + " Please Choose Head or Tail : ");
        document.getElementById("choseHeadtailPlayer1").innerText = "Choose: "+choosePlayer1;
        if (choosePlayer1 === "head" || choosePlayer1 === "Head") {
            document.getElementById("chosePlayer2").innerText = "Choose : Tail";
        }
        else if (choosePlayer1 === "tail" || choosePlayer1 === "Tail");
        {
            document.getElementById("chosePlayer2").innerText = "Choose: Head";
        }
        break;
    case 2:
        alert(Player2Name + " you Choose Head or Tail");
        choosePlayer2 = prompt("First " + Player2Name + " Please Choose Head or Tail : ");
        document.getElementById("choseHeadtailPlayer2").innerText = "Choose: "+choosePlayer2;
        if (choosePlayer2 === "head" || choosePlayer2 === "Head") {
            document.getElementById("chosePlayer1").innerText = "Choose : Tail";
        }
        else if (choosePlayer2 === "tail" || choosePlayer2 === "Tail");
        {
            document.getElementById("chosePlayer1").innerText = "Choose : Head";
        }
        break;
    default:
        alert("Please Choose Option")

}

//Working on Play Button
var score1 = 0;
var score2 = 0;

function playerGame() {

    // random flipping number

    var randomNum = Math.floor(Math.random() * 2) + 1;
    switch (randomNum) {
        case 1:
            document.getElementById("FlipingDice").innerText = "Head";
            score1 = score1 + 1;
            document.getElementById("ScorePlayer1").innerText = "Score : " + score1;
            break;
        case 2:
            document.getElementById("FlipingDice").innerText = "Tail";
            score2 = score2 + 1;
            document.getElementById("ScorePlayer2").innerText = "Score : " + score2;
            break;
    }
}

 
//Working on countDown Timer

 var startingMints = 1;
 var time = startingMints * 60;
 var countDown = document.getElementById("Timer");

 var settime = setInterval(updateCountDown, 1000)
 function updateCountDown() {
     var minutes = Math.floor(time / 60)
     let second = time % 60;
     second = second < 1 ? '0' + second : second;
     countDown.innerText = `${minutes} : ${second}`;
     time--;
     if (minutes === 0 && second == 00) {
         clearInterval(settime);
         if (score1 > score2) {
             document.getElementById("winner").innerText = "Congrats 🏆" + Player1Name + " WON MATCH";
         }
         else if (score2 > score1) {
             document.getElementById("winner").innerText = "Congrats 🏆" + Player2Name + " WON MATCH";
         }
         else{
            document.getElementById("winner").innerText = "MATCH TIED 😨"
         }
     }
 }