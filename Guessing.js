const max = prompt("Enter the MAX  number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number : ");


while(true){
    if(guess == "quit"){
        console.log("User Quit The Game,You can play it any time Thank U! ");
        break;

    }
    if(guess == random){
        console.log(` HURRAY! You Guess it right random number is ${random}`);
        break;

    }else if (guess < random){
        guess = prompt("Hint: You Guess was small Please try again.");
    }else {
         guess = prompt("Hint: You Guess was large  Please try again.");
    }


}