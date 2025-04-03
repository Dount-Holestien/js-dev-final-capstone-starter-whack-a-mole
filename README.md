# 🎯 Whack-a-Mole Game

A browser-based Whack-a-Mole game built with **HTML**, **CSS**, and **JavaScript**. This was developed as a capstone project to demonstrate DOM manipulation, event handling, timers, and game logic.

## 🚀 Live Demo

[🔗 Play the Game Here](https://your-github-username.github.io/your-repo-name)

## 📁 Project Structure


## 📦 Installation & Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm test` to launch the test suite
4. Open `index.html` in the browser or deploy via GitHub Pages

## 🎮 How to Play

1. Click the **Start** button
2. Moles will appear randomly in 1 of 9 holes
3. Click (or "whack") a mole to score a point
4. Game ends when the timer reaches 0

## ✨ Features

- Interactive mole animation using JavaScript and CSS transitions
- Dynamic score counter
- Countdown timer with game stop logic
- Original visual design (custom font and layout)
- Passes automated test suite using Jest + Puppeteer

## 💡 Originality

- Custom background and font theme
- Visual polish and UI enhancements
- Built from scratch based on user stories and test-driven development

## 🧪 Testing

This project uses [Jest](https://jestjs.io/) with [Puppeteer](https://pptr.dev/) to test HTML structure, DOM updates, and gameplay behavior.

```bash
npm test


---

## 🧾 Code Commenting Example

In your `index.js`, start adding comments like this:

```js
/**
 * Returns a random integer between min and max
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Increases score by 1 and updates UI
 */
function updateScore() {
  points += 1;
  score.textContent = points;
  return points;
}

