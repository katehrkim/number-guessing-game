console.log("HELLO NOVEMBER PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let answer = 0

const playGame = () => {
  answer = Math.floor(Math.random() * 10) + 1;
  let gameOutput = document.getElementById("output")
  gameOutput.innerHTML = "Guess a number between 1 and 10: "
  document.getElementById("guess").style.display = 'block'
}

const checkGuess = () => {
  let gameGuess = document.getElementById("input").value
  let gameFeedback = document.getElementById("feedback")

  if (gameGuess == answer) {
    gameFeedback.innerHTML = "You guessed correctly!"
  }
  else if (gameGuess > answer) {
    gameFeedback.innerHTML = "You guessed too high!"
  }
  else if (gameGuess < answer) {
    gameFeedback.innerHTML = "You guessed too low!"
  }
}
