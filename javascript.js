
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
if (firstQuiz.toUpperCase() === "JESUS"){
    correctAnswer += 1;
}
const secondQuiz = prompt ("Closest planet to the sun?");
if(secondQuiz.toUpperCase() === "MERCURY"){
    correctAnswer += 1;
}
const thirdQuiz = prompt ("Owner of Tesla?");
if(thirdQuiz.toUpperCase() === "ELON MUSK"){
    correctAnswer += 1;
}
const fourthQuiz = prompt("What language do you use to style webpages?");
if(fourthQuiz.toUpperCase() === "CSS"){
    correctAnswer += 1;
}
const fifthQuiz = prompt("Which programming language is the most commmon?");
if(fifthQuiz.toUpperCase() === "JAVASCRIPT"){
    correctAnswer += 1;
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


