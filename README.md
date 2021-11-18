# homework4

Place timer on top right of page
-timer function will display once start button is clicked
-at zero run function of endGame
-



For the html I want a Header with text inside of a container
-the contaier will be centered on the screen slightly below the top
I will add an element under the header that only appears at the end of the game with the final score

I want a list element for the multiple choice

Below the list element I want a paragraph that will reflect if the answer was right or wrong



For the game logic
- function with an if/else
-add array of correct answers
--if userChoice === correct   textContent "correct" call function to next question
--else textContent "Wrong" subtract 5 seconds from current time call funtion to nextQ as in next question

nextQ function will call clearQ function and replace text Content in the header and the list

clearQ will set text content to nothing "" in order for new content to be populated in the same header and list elements

add form for highscore
-save to local
--on submit button
--event.preventDefault
--display highscores on submit

On highscores page
-play again button will call the startGame function

