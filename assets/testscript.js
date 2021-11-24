var answerOptions = document.getElementById("answerOptions");

function revealAnswerOptions () {
  answerOptions.style.display = "block"
}

var startButton = document.getElementById("startButton");


startButton.addEventListener("click", startGame)
//Start game function

function startGame(){
    countdown();
    startButton.disabled=true;
    timerCount=100;
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
      if (timerCount <= 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        //timerEl.textContent = "Timer:" + timeLeft;
        // Decrement `timeLeft` by 1
        window.open("highscore.html", "_self");
      }
    }, 1000);
}

//TEST TEST TEST

var questionsLocation = document.getElementById("questions");

answerOptions.addEventListener("click", function(event) {
  var userAnswer = event.target;

  if(correctAnswers.indexOf(userAnswer.textContent) !== -1){
    console.log("Correct");
    renderQuestions();
    answersPopulation();
    score++

  }else{
    console.log("Wrong");
    renderQuestions();
    answersPopulation();
    timerCount= timerCount-5;
  }

});


function renderQuestions(){
    var random = Math.floor(Math.random()*questions.length);
    //questionsLocation.textContent= random.valueOf;
    questionsLocation.textContent=questions[random];
}

//Question array

// var questions = []
// questions[0]="What company developed Java Script";
// questions[1]="Which of the following is a correct type of Pop up box in Java Script";
// questions[2]="A string can be represented using a single or double ____";
// questions[3]="What represents a logical entity and can have only two values : true or false";
// questions[4]="What is an object in Java Script";

//TEST TEST TEST

var questions = ["What company developed Java Script","Which of the following is a correct type of Pop up box in Java Script","A string can be represented using a single or double ____","What represents a logical entity and can have only two values : true or false","What is an object in Java Script"];

//COuldn't get answers to populate correctly otherwise

var planB0="What company developed Java Script";
var planB1="Which of the following is a correct type of Pop up box in Java Script";
var planB2="A string can be represented using a single or double ____";
var planB3="What represents a logical entity and can have only two values : true or false";
var planB4="What is an object in Java Script";

//Possible answers array and a possible answer population function

var correctAnswers =["Netscape","Alert","quote","Boolean","a collection of data"];
var possibleAnswers0 =["Netscape","Apple","Doja Cat","Disney"];
var possibleAnswers1 =["Envelope","Alert","Emergency","Package"];
var possibleAnswers2 =["Space","Dash","quote","period"];
var possibleAnswers3 =["Impress","Alert","quote","Boolean"];
var possibleAnswers4 =["API","a browser","a string","a collection of data"];




function answersPopulation(){
    
    if (questionsLocation.textContent==planB0){
    answerOptions.children[0].textContent=possibleAnswers0[0];
    answerOptions.children[1].textContent=possibleAnswers0[1];
    answerOptions.children[2].textContent=possibleAnswers0[2];
    answerOptions.children[3].textContent=possibleAnswers0[3];
    }
    else if (questionsLocation.textContent==planB1){
    answerOptions.children[0].textContent=possibleAnswers1[0];
    answerOptions.children[1].textContent=possibleAnswers1[1];
    answerOptions.children[2].textContent=possibleAnswers1[2];
    answerOptions.children[3].textContent=possibleAnswers1[3];
    }
    else if (questionsLocation.textContent==planB2){
    answerOptions.children[0].textContent=possibleAnswers2[0];
    answerOptions.children[1].textContent=possibleAnswers2[1];
    answerOptions.children[2].textContent=possibleAnswers2[2];
    answerOptions.children[3].textContent=possibleAnswers2[3];
    }
    else if (questionsLocation.textContent==planB3){
    answerOptions.children[0].textContent=possibleAnswers3[0];
    answerOptions.children[1].textContent=possibleAnswers3[1];
    answerOptions.children[2].textContent=possibleAnswers3[2];
    answerOptions.children[3].textContent=possibleAnswers3[3];
    }
    else if (questionsLocation.textContent==planB4){
    answerOptions.children[0].textContent=possibleAnswers4[0];
    answerOptions.children[1].textContent=possibleAnswers4[1];
    answerOptions.children[2].textContent=possibleAnswers4[2];
    answerOptions.children[3].textContent=possibleAnswers4[3];
}};

//TEST TEST TEST

var score=0;
console.log(score);