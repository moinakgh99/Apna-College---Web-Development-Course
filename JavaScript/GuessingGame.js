let max = Number(prompt("Enter The maximum Number"));

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number please !!");

while(true) {
    if(guess === "quit") {
        console.log("You quit the Game !!");
        break;
    }

    guess = Number(guess);

    if(guess == random) {
        console.log(
            "You guess the correct Number !! Congrats .. The Random was",
            random,
        );
        break;
    }
    else if(guess < random) guess = prompt("The number is small, Guess Large number pls !!");
    else guess = prompt("The number is Large, Guess small number pls !!");
}