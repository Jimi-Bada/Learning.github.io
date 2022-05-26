
// alert("Warning! This message will self destruct in");
// alert("3");
// alert("2");
// alert("1");
// console.log("Message destroyed!");
// document.querySelector("h2").textContent="Boom";

// var score= 2;
// score += 10;
// score += 5;
// console.log(score);
// const passphrase = "Open Sesame!"
// console.log(passphrase.length);
// const name = prompt("What is your name?");
// const message=(`wqq ${name} Fuck you`);
// alert(message);
// const adjective = prompt("Please input an adjective");
// const noun = prompt("Please input a noun");
// const verb = prompt("Please input a verb");
// const story= `<p>There was once a ${adjective} farmer who wanted ${verb} people and ${noun}</p>`;
// console.log(story);
// document.querySelector("body").innerHTML= story;
let correctAnswer= 0;
let playerRank = "";
const firstQuiz = prompt("Who is the Christian Messiah?");
if (firstQuiz.toUpperCase() === "JESUS" || firstQuiz.toUpperCase() === `JESUS CHRIST`) {
    correctAnswer += 1;
    alert("Sabi person!")
} else{
    alert("Olodo!")
    }
const secondQuiz = prompt ("Closest planet to the sun?");
if(secondQuiz.toUpperCase() === "MERCURY"){
    correctAnswer += 1;
       alert("Sabi person!")
} else{
    alert("Olodo!")
}
const thirdQuiz = prompt ("Who is the love of my life");
if(thirdQuiz.toUpperCase() === "OLUWAPELUMI"){
    correctAnswer += 1;
       alert("Sabi person!")
} else{
    alert("Olodo!")
}
const fourthQuiz = prompt("What language do you use to style webpages?");
if(fourthQuiz.toUpperCase() === "CSS"){
    correctAnswer += 1;
       alert("Sabi person!")
} else{
    alert("Olodo!")
}
const fifthQuiz = prompt("Which programming language is the most commmon?");
if(fifthQuiz.toUpperCase() === "JAVASCRIPT"){
    correctAnswer += 1;
       alert("Sabi person!")
} else{
    alert("Olodo!")
}
if(correctAnswer === 5){
    playerRank = "Gold";
} else if(correctAnswer >= 3){
    playerRank = "Silver";
} else if (correctAnswer >=2){
    playerRank = "Bronze";
} else {
    playerRank = "None :(";
}
const result = document.querySelector("main").innerHTML =`<h1> You got ${correctAnswer} out of 5 questions.</h2>
                                                          <p> Crown earned: <strong> ${playerRank}</strong></p>`;
// console.log(messiah);
// const secondQuiz = prompt("WHich planet is closet to the Sun?");
const highNumber = +prompt(`Input a high number`);
const lowNumber = +prompt(`Input a low number`);
if(highNumber && lowNumber){
    if(highNumber <= 10){
        alert(`high number must be greater than 10`);
    }else if( lowNumber > 10){
        alert(`Not a low number, low number must be below 10`);
    }else if(highNumber > 10 && lowNumber <=10 ){
    const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1)) + lowNumber;
    alert(`${randomNumber} is a random number between ${lowNumber} and ${highNumber} `);
    }
  }else if( highNumber === "" || highNumber === null && lowNumber === "" || lowNumber === null ){
   alert(`Please input a number`);
  } else{
    alert(`Please input two numbers`);
   }


