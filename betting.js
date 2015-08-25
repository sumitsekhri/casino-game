var bankroll = 100

var bet = prompt("What is your bet size?");
var guess = prompt("What is your guess?");

function gambling(guess){
  var casino = Math.floor((Math.random() * 10) + 1);

  if (guess == casino + 1 || guess == casino - 1) {
    console.log("You've tied")
    bankroll = bankroll
  }
  else if (guess == casino) {
    console.log("You are a winner!")
    bankroll = bankroll + (bet * 2)
  }
  else {
    console.log("Sorry you lose")
    bankroll = bankroll - bet
  }
  console.log(guess)
  console.log(casino)
  console.log(bankroll)
}

console.log(gambling(guess))
