//Event listener for the start game
var startButton = document.getElementById("startButton")
var questionContainerElement = document.getElementById("question-container")

startButton.addEventListener("click", startGame)
//Start game function

function startGame(){
    //startButton.disabled=true;
    //startButton.classList.add('hidden')
    //questionContainerElement.classList.remove("hidden")
    //nextQuestion()
    timerCount=10;
    countdown()
    hideOrShow()
    
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
      timerEl.textContent = timerCount;
      if (timerCount == 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        //timerEl.textContent = "Timer:" + timeLeft;
        // Decrement `timeLeft` by 1
        window.open("highscore.html", "_self");

        
      // } else if (timeLeft === 1) {
      //   // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      //   timerEl.textContent = "Timer:" + timeLeft;
      //   timeLeft--;
      // } else {
      //   // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      //   timerEl.textContent = '';
      //   // Use `clearInterval()` to stop the timer
      //   clearInterval(timeInterval);
      //   // Call the `displayMessage()` function
      //   //displayMessage();
      }
    }, 1000);
}

//user select functions
var answerOptions = document.getElementById("answerOptions");

// answerOptions.addEventListener("click", function(event){
//   var element = event.target;
//   console.log(element)
  
//   if (element.matches(".box"))}

  


//hide the answer options
answerOptions.style.display = "none"

function hideOrShow() {
	
  // Select the element with id "theDIV"
  
  // If selected element is hidden
  if (answerOptions.style.display === "none") {
  
    // Show the hidden element
    answerOptions.style.display = "block";
    
    // Else if the selected element is shown
  } else {
  
    // Hide the element
    answerOptions.style.display = "none";
  }
}

//Highscore Function to local storage

var gamerTag = document.getElementById("gamer-tag");
var gamerScore = document.getElementById("gamer-score");
var g

var scores = [];

function saveScore() {
    // Save related form data as an object
    var gamerScore = {
      gamerTag: gamerTag.value,
      gamerScore: gamerScore.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("gamerScore", JSON.stringify(gamerScore));
  }
  
// The following function renders items in a todo list as <li> elements
function renderScores() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Complete ✔️";
  
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }

// This function is being called below and will run when the page loads.
function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("gamerScore"));
  
    // If score were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render todos to the DOM
    renderScores();
  }



//Question array
// var questions = [
//     {
//         question:"What company developed Java Script",
//         answer:"Netscape"
//     },
//     {
//         question:"Which of the following is a correct type of Pop up box in Java Script"
//         answer:"Alert"
//     },
//     {
//         question:"A string can be represented using a single or double ____"
//         answer:"quote"
//     },
//     {
//         question:"What represents a logical entity and can have only two values : true or false"
//         answer:"Boolean"
//     },
//     {
//         question:"What is an object in Java Script"
//         answer:"a collection of data"
//     }
// ]
//come back to this function
function resetQuestion(){
    questionContainerElement.hidden()
}

function nextQuestion(){
    let i=Math.floor(Math.random()*questions.length);
    let newQuestion= questions[i]
    questions.splice(0,i)
    return{newQuestion, i}
}

function chosenAnswer(e){
    var selectedButton= e.target
    var
}
//Check answer function
var correctAnswers= ["d","jj",];

function checkAnswer=(){
    if(chosenAnswer===correctAnswers){
        textContent="Correct";
        score++
    }
    else(){
        textContent="Wrong";
        score--
    }
}

//add element and script inside

var main =documen

//loop through variable
var divTags = document.querySelectorAll("div");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }