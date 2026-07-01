let favMovie = "avatar";
let guess = prompt("Guess my favourite movie : ");

while (guess != favMovie && guess != "quit") {
  prompt("Wrong Guess ... Enter again !!");
}

if(guess === FavMovie) console.log("Congrats !!");
else console.log("You Quit !!");
