var answerOptions = document.getElementById("answerOptions");

function revealAnswerOptions () {
  answerOptions.setAttribute("class","btn-group-vertical; bg-warning; d-flex; justify-content-center; visible");
}

var startButton = document.getElementById("startButton");


startButton.addEventListener("click", startGame)
//Start game function

function startGame(){
    countdown();
    startButton.disabled=true;
    timerCount=10;
    //revealAnswerOptions();
    renderQuestions();
    answersPopulation();
}
//Timer function

var timerEl = document.getElementById("time");
var timer;
var timerCount;

function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timer = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      timerCount--;
      timerEl.textContent = "Timer:"+timerCount;
      if (timerCount == 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        //timerEl.textContent = "Timer:" + timeLeft;
        // Decrement `timeLeft` by 1
        window.open("highscore.html", "_self");
      }
    }, 1000);
}

//TEST TEST TEST

var questionsLocation = document.getElementById("questions");



function renderQuestions(){
    var random = Math.floor(Math.random()*questions.length);
    //questionsLocation.textContent= random.valueOf;
    questionsLocation.textContent=questions[random];
}

//Question array

var questions = []
questions[0]="What company developed Java Script";
questions[1]="Which of the following is a correct type of Pop up box in Java Script";
questions[2]="A string can be represented using a single or double ____";
questions[3]="What represents a logical entity and can have only two values : true or false";
questions[4]="What is an object in Java Script";




// ["What company developed Java Script",
//         //answer:"Netscape"
//         "Which of the following is a correct type of Pop up box in Java Script",
//         //answer:"Alert"
//         "A string can be represented using a single or double ____",
//         //answer:"quote"
//         "What represents a logical entity and can have only two values : true or false",
//         //answer:"Boolean"
//         "What is an object in Java Script"
//         //answer:"a collection of data"
// ];

//TEST TEST TEST

var correctAnswers =["Netscape","Alert","quote","Boolean","a collection of data"];
var possibleAnswers0 =["Netscape","Apple","Doja Cat","Disney"];
var possibleAnswers1 =["Envelope","Alert","Emergency","Package"];
var possibleAnswers2 =["Space","Dash","quote","period"];
var possibleAnswers3 =["Netscape","Alert","quote","Boolean"];
var possibleAnswers4 =["API","a browser","a string","a collection of data"];


function answersPopulation(){
    if (questions == questions[0])
    answerOptions.children[0].textContent=possibleAnswers0[0];
    answerOptions.children[1].textContent=possibleAnswers0[1];
    answerOptions.children[2].textContent=possibleAnswers0[2];
    answerOptions.children[3].textContent=possibleAnswers0[3];

    if (questions == questions[1])
    answerOptions.children[0].textContent=possibleAnswers1[0];
    answerOptions.children[1].textContent=possibleAnswers1[1];
    answerOptions.children[2].textContent=possibleAnswers1[2];
    answerOptions.children[3].textContent=possibleAnswers1[3];

    if (questions == questions[2])
    answerOptions.children[0].textContent=possibleAnswers2[0];
    answerOptions.children[1].textContent=possibleAnswers2[1];
    answerOptions.children[2].textContent=possibleAnswers2[2];
    answerOptions.children[3].textContent=possibleAnswers2[3];

    if (questions == questions[3])
    answerOptions.children[0].textContent=possibleAnswers3[0];
    answerOptions.children[1].textContent=possibleAnswers3[1];
    answerOptions.children[2].textContent=possibleAnswers3[2];
    answerOptions.children[3].textContent=possibleAnswers3[3];

    if (questions == questions[4])
    answerOptions.children[0].textContent=possibleAnswers4[0];
    answerOptions.children[1].textContent=possibleAnswers4[1];
    answerOptions.children[2].textContent=possibleAnswers4[2];
    answerOptions.children[3].textContent=possibleAnswers4[3];
}
