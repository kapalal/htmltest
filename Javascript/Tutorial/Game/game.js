//create secret number
var secretNumber = 4;
//ask user for guess
var StringGuess = prompt("Choose number pls");
var guess = Number(StringGuess);
alert(guess)
//check guess
if (guess === secretNumber) {
  alert("Yout got it bad *usher voice*");
}

else if (Number(guess) < secretNumber) {
  alert("You're too low")

}

else {
  alert("You're too high my nig")
}
