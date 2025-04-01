const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');

//  Add missing selectors
const score = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty = "hard";

//  Generate a random number between min and max
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Set delay based on difficulty
function setDelay(difficulty) {
  if (difficulty === "easy") return 1500;
  if (difficulty === "normal") return 1000;
  if (difficulty === "hard") return randomInteger(600, 1200);
}

//  Pick a random hole, not the same as last
function chooseHole(holes) {
  const index = randomInteger(0, holes.length - 1);
  const hole = holes[index];
  if (hole === lastHole) return chooseHole(holes);
  lastHole = hole;
  return hole;
}

//  Check if game is over or keep playing
function gameOver() {
  if (time > 0) {
    return showUp();
  } else {
    return stopGame();
  }
}

//  Call showAndHide with delay and random hole
function showUp() {
  let delay = setDelay(difficulty);
  const hole = chooseHole(holes);
  return showAndHide(hole, delay);
}

//  Show and hide mole using delay
function showAndHide(hole, delay){
  toggleVisibility(hole); // Show mole

  const timeoutID = setTimeout(() => {
    toggleVisibility(hole); // Hide mole
    gameOver(); // Continue or stop
  }, delay);

  return timeoutID;
}

//  Toggle 'show' class
function toggleVisibility(hole){
  hole.classList.toggle('show');
  return hole;
}

//  Update score on hit
function updateScore() {
  points++;
  score.textContent = points;
  return points;
}

//  Clear score
function clearScore() {
  points = 0;
  score.textContent = points;
  return points;
}

//  Update timer every second
function updateTimer() {
  time--;
  timerDisplay.textContent = time;
  return time;
}

//  Start timer
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}

//  Called when mole is clicked
function whack(event) {
  if (event.isTrusted) {
    updateScore();
    event.target.parentNode.classList.remove('show'); // Hide mole early
  }
  return points;
}

//  Set click events on all moles
function setEventListeners(){
  for (let mole of moles) {
    mole.addEventListener('click', whack);
  }
  return moles;
}

//  Set how long the game should last
function setDuration(duration) {
  time = duration;
  timerDisplay.textContent = time;
  return time;
}

//  Stop the game
function stopGame(){
  clearInterval(timer);
  return "game stopped";
}

//  Start game logic
function startGame(){
  stopGame();              // Reset any running game
  clearScore();            // Reset points
  setDuration(10);         // Set to 10 seconds
  setEventListeners();     // Attach mole click listeners
  startTimer();            // Begin countdown
  showUp();                // Start mole loop

  return "game started";
}

startButton.addEventListener("click", startGame);

// Don't modify this block
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
