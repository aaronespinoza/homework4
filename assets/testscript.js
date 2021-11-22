var answerOptions = document.getElementById("answerOptions");

function revealQuestions () {
  answerOptions.className("btn-group-vertical bg-warning d-flex justify-content-center visible");
}

var startButton = document.getElementById("startButton");


startButton.addEventListener("click", startGame)
//Start game function

function startGame(){
    countdown();
    timerCount=10;
}
///////TEST TEST TEST

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