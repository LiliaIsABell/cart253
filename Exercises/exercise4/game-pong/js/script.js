"use strict";

// Pong
// by Pippin Barr

// Modified by Lilia Isabel Aguirre Lugo

// A "simple" implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Up and down keys control the right hand paddle, W and S keys control
// the left hand paddle

// Whether the game has started
let playing = false;

// Game colors
// bgColor is removed since it is no longer needed
let fgColor = 255;
// variables to change background color
let turnYellow = 0;
let turnBlue = 0;

// BALL

// A ball object with the properties of
// position, size, velocity, and speed
let ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5
}

// PADDLES

// Basic definition of a left paddle object with its key properties of
// position, size, velocity,speed and score
let leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 87,
  downKey: 83,
  // Added key property for the score
  leftScore: 0
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, speed and score
let rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 38,
  downKey: 40,
  // Added key property for the score
  rightScore: 0
}

// A variable to hold the beep sound we will play on bouncing
let beepSFX;

// Added variable for the chime sound when someone scores
let scorePoint;
// preload()
//
// Loads the beep audio for the sound of bouncing
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  // Load the chime audio for the points sound
  scorePoint = new Audio("assets/sounds/Chime.wav");
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

  setupPaddles();
  resetBall();
}

// setupPaddles()
//
// Sets the starting positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle position
  leftPaddle.x = 0 + leftPaddle.w;
  leftPaddle.y = height / 2;

  // Initialise the right paddle position
  rightPaddle.x = width - rightPaddle.w;
  rightPaddle.y = height / 2;
}

// draw()
//
// Calls the appropriate functions to run the game
// See how tidy it looks?!
function draw() {
  // The background is green
  // The color variables are placed here to allow the
  // colors to change
  background(turnYellow, 255, turnBlue);

  if (playing) {
    // If the game is in play, we handle input and move the elements around
    handleInput(leftPaddle);
    handleInput(rightPaddle);
    updatePaddle(leftPaddle);
    updatePaddle(rightPaddle);
    updateBall();

    checkBallWallCollision();
    checkBallPaddleCollision(leftPaddle);
    checkBallPaddleCollision(rightPaddle);

    // Check if the ball went out of bounds and respond if so
    // (Note how we can use a function that returns a truth value
    // inside a conditional!)
    if (ballIsOutOfBounds()) {


      scoreKeeper();
      // Declared scoreKeeper in ballIsOutOfBounds since
      //both functions are related, but before resetBall
      // so that the score does not get reset.

      resetBall();
      // If it went off either side, reset it
    }

  } else {
    // Otherwise we display the message to start the game
    displayStartMessage();
  }

  // We always display the paddles and ball so it looks like Pong!
  displayPaddle(leftPaddle);
  displayPaddle(rightPaddle);
  displayBall();
}

// handleInput()
//
// Checks the mouse and keyboard input to set the velocities of the
// left and right paddles respectively.
function handleInput(paddle) {
  // Move the paddle based on its up and down keys
  // If the up key is being pressed
  if (keyIsDown(paddle.upKey)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the down key is being pressed
  else if (keyIsDown(paddle.downKey)) {
    // Move down
    paddle.vy = paddle.speed;
  } else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePositions()
//
// Sets the positions of the paddles and ball based on their velocities
function updatePaddle(paddle) {
  // Update the paddle position based on its velocity
  paddle.y += paddle.vy;
}

// updateBall()
//
// Sets the position of the ball based on its velocity
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// ballIsOutOfBounds()
//
// Checks if the ball has gone off the left or right
// Returns true if so, false otherwise
function ballIsOutOfBounds() {
  // Check for ball going off the sides
  if (ball.x < 0 || ball.x > width) {
    return true;
  } else {
    return false;
  }
}

// Declare the fuction for scoreKeeper
function scoreKeeper() {
  // When ball crosses the left border,
  // rightPaddle gets a point
  if (ball.x < 0) {
    rightPaddle.rightScore = rightPaddle.rightScore + 1;

    // To show that rightPaddle is scoring,
    // The background returns to green
    turnBlue = 0;
    // The background increasingly turns yellow
    turnYellow += 50;
    // constrain makes sure that 255 is the color's maximum
    turnYellow = constrain(turnYellow, 0, 255);
    // Sound plays whenever rightPaddle scores
    scorePoint.currentTime = 0;
    scorePoint.play();
  }
  // When ball crosses the right border,
  // leftPaddle gets a point
  else if (ball.x > width) {
    leftPaddle.leftScore = leftPaddle.leftScore + 1;

    // To show that rightPaddle is scoring,
    // The background returns to green
    turnYellow = 0;
    // The background increasingly turns blue
    turnBlue += 50;
    // constrain makes sure that 255 is the color's maximum
    turnBlue = constrain(turnBlue, 0, 255);
    // Sound plays whenever leftPaddle scores
    scorePoint.currentTime = 0;
    scorePoint.play();
  }
  // console.log allows to see how much each side scored in Console
  console.log(leftPaddle.leftScore + "POINT LEFT");
  console.log(rightPaddle.rightScore + "POINT RIGHT");
}
// checkBallWallCollision()
//
// Check if the ball has hit the top or bottom of the canvas
// Bounce off if it has by reversing velocity
// Play a sound
function checkBallWallCollision() {
  // Check for collisions with top or bottom...
  if (ball.y < 0 || ball.y > height) {
    // It hit so reverse velocity
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }
}

// checkBallPaddleCollision(paddle)
//
// Checks for collisions between the ball and the specified paddle
function checkBallPaddleCollision(paddle) {
  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of the
  // paddle and the ball to make our conditionals easier to read...
  let ballTop = ball.y - ball.size / 2;
  let ballBottom = ball.y + ball.size / 2;
  let ballLeft = ball.x - ball.size / 2;
  let ballRight = ball.x + ball.size / 2;

  let paddleTop = paddle.y - paddle.h / 2;
  let paddleBottom = paddle.y + paddle.h / 2;
  let paddleLeft = paddle.x - leftPaddle.w / 2;
  let paddleRight = paddle.x + paddle.w / 2;

  // First check the ball is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle
      // Reverse its vx so it starts travelling in the opposite direction
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }
}

// displayPaddle(paddle)
//
// Draws the specified paddle
function displayPaddle(paddle) {
  // Draw the paddles
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

// displayBall()
//
// Draws the ball on screen as a square
function displayBall() {
  // Draw the ball
  rect(ball.x, ball.y, ball.size, ball.size);
}

// resetBall()
//
// Sets the starting position and velocity of the ball
function resetBall() {
  // Initialise the ball's position and velocity
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = ball.speed;
  // ball.vy has a random velocity
  // to make the ball start in a more unpredictable way.
  ball.vy = random(ball.speed, 10);
}

// displayStartMessage()
//
// Shows a message about how to start the game
function displayStartMessage() {
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  text("CLICK TO START", width / 2, height / 2);
  pop();
}

// mousePressed()
//
// Here to require a click to start playing the game
// Which will help us be allowed to play audio in the browser
function mousePressed() {
  playing = true;
}
