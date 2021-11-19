//Timer function
var timerEl = document.getElementById("time");



function countdown() {
    var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = "Timer:" + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = "Timer:" + timeLeft;
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
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


//Event listener for the start game
var startButton = document.getElementById("startButton")

startButton.addEventListener("click", startGame);

//Start game function

function startGame(){
    startButton.disabled=true;
    countdown
}

//Check answer function
var correctAnswers= ["d","d",];

function checkAnswer=(){
    if(chosenAnswer===correctAnswers){
        .textContent="Correct";
        score++
    }
    else(){
        .textContent="Wrong";
        score--
    }
}