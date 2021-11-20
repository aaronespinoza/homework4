var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");
var enterInitialsButton = document.getElementById("initials");
var msgDiv = document.querySelector("#msg");
var userInitials = document.getElementById("user-initials");
var userScoreSpan = document.getElementById("#user-score");

//my own variables

var highscoreElement = document.getElementById("highscores")

var storedInitials=[]

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var initials = localStorage.getItem("initials");
  //var score = localStorage.getItem("score");

  if (!initials) {
    return;
  }

  userInitials.textContent = initials;
  //userScoreSpan.textContent = score;
}

enterInitialsButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;
  //var score = document.querySelector("#score").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Initials saved successfully");

    localStorage.setItem("initials", initials);
    //localStorage.setItem("score", score);
    renderLastRegistered();
  }
});

// The following function renders items in a highscore list as <li> elements
// function renderScores() {
//     // Clear todoList element and update todoCountSpan
//     initialsInput.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete ✔️";
  
//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }

//renderScores()