const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');

//  Add the missing query selectors
const score = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "hard";

/**
 * Generates a random integer within a range.
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Sets the time delay given a difficulty parameter.
 */
function setDelay(difficulty) {
  if (difficulty === "easy") return 1500;
  if (difficulty === "normal") return 1000;
  if (difficulty === "hard") return randomInteger(600, 1200);
  return 1000;
}

/**
 * Chooses a random hole from a list of holes.
 */
function chooseHole(holes) {
  const index = randomInteger(0, holes.length - 1);
  const hole = holes[index];
  if (hole === lastHole) {
    return chooseHole(holes);
  }
  lastHole = hole;
  return hole;
}

/**
 * Calls the showUp function if time > 0, stops game if time = 0.
 */
function gameOver() {
  if (time > 0) {
    return showUp();
  } else {
    return stopGame();
  }
}

/**
 * Calls the showAndHide() function with a delay and a hole.
 */
function showUp() {
  const delay = setDelay(difficulty);
  const hole = chooseHole(holes);
  return showAndHide(hole, delay);
}

/**
 * Shows and hides a mole given a delay time.
 */
function showAndHide(hole, delay) {
  toggleVisibility(hole); // Show mole

  const timeoutID = setTimeout(() => {
    toggleVisibility(hole); // Hide mole
    gameOver(); // Continue or stop
  }, delay);

  return timeoutID;
}

/**
 * Adds or removes the 'show' class to a hole.
 */
function toggleVisibility(hole) {
  hole.classList.toggle('show');
  return hole;
}

/**
 * Increments score and updates the scoreboard.
 */
function updateScore() {
  points++;
  score.textContent = points;
  return points;
}

/**
 * Clears the score and updates display.
 */
function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}

/**
 * Decrements timer and updates display.
 */
function updateTimer() {
  time--;
  timerDisplay.textContent = time;
  return time;
}

/**
 * Starts the countdown timer.
 */
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}

/**
 * Called when a mole is clicked.
 */
function whack(event) {
  if (event.isTrusted) {
    updateScore();
    event.target.parentNode.classList.remove('show');
  }
  return points;
}

/**
 * Adds click listeners to all moles.
 */
function setEventListeners() {
  for (let mole of moles) {
    mole.addEventListener('click', whack);
  }
  return moles;
}

/**
 * Sets how long the game will last.
 */
function setDuration(duration) {
  time = duration;
  timerDisplay.textContent = time;
  return time;
}

/**
 * Stops the game.
 */
function stopGame() {
  clearInterval(timer);
  return "game stopped";
}

/**
 * Starts the game when the button is clicked.
 */
function startGame() {
  stopGame();              // Reset state
  clearScore();            // Reset score
  setDuration(10);         // Set time to 10 seconds
  setEventListeners();     // Add event listeners
  startTimer();            // Start countdown
  showUp();                // Start game loop

  return "game started";
}

startButton.addEventListener("click", startGame);

// Don't modify this block — used for testing
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
