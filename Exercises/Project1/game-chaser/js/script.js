"use strict";

/******************************************************

Game - Chaser
Pippin Barr
Modified by Lilia Isabel Aguirre Lugo

A "simple" game of cat and mouse. The player is a circle and can move with keys,
if they overlap the (randomly moving) prey they "eat it" by sucking out its life
and adding it to their own. The player "dies" slowly over time so they have to keep
eating to stay alive.

Includes: Physics-based movement, keyboard controls, health/stamina,
random movement, screen wrap.

******************************************************/

// Track whether the game is over
let gameOver = false;

//The player is a red firefly
// Player position, size, velocity
let playerX;
let playerY;
// The player's radius is now smaller
// so that the stroke can look bigger
let playerRadius = 20;
let playerVX = 0;
let playerVY = 0;
let playerMaxSpeed = 2;
// Player health
let playerHealth;
let playerMaxHealth = 255;
// Declare a variable for the color green
// to allow the player to change color
let firegreen = 0;

// The prey is a firefly
// Prey-firefly position, size, velocity
let preyX;
let preyY;
// The prey-firefly's radius is now smaller
// so that the stroke can look bigger
let preyRadius = 20;

let preyVX;
let preyVY;
let preyMaxSpeed = 4;
//Adding variable for Perlin noise
let preytx = 0;
let preyty = 0;
// Prey-firefly health
let preyHealth;
let preyMaxHealth = 100;


// Declare variables for the tiny fireflies
// They are simply there for decoration
// Position
let fireflyX = 50;
let fireflyY = 50;
// Size
let fireflySize = 10;
// Maximum number of flies
let numFlies = 5;


// Amount of health obtained per frame of "eating" (overlapping) the prey-firefly
let eatHealth = 10;
// Number of prey-firefly eaten during the game (the "score")
let preyEaten = 0;


// Declared variable for background sound
let nightSound;
// Declare variable for the sound when prey-firefly is eaten
let eatenSound

// Added preload fuction
function preload() {
  // Loading the background sound
  nightSound = loadSound("assets/sounds/Night.wav");
  // Loading the eaten sound
  eatenSound = loadSound("assets/sounds/Blop.wav");
}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(500, 500);
  // Play the background sound
  // Will keep playing for it's entire lenght (around 2 mins)
  nightSound.play();

  noStroke();

  // We're using simple functions to separate code out
  setupPrey();
  setupPlayer();
  // Add function for reset game
  resetGame();
}

// setupPrey()
//
// Initialises prey-firefly's position, velocity, and health
function setupPrey() {
  preyX = width / 5;
  preyY = height / 2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4 * width / 5;
  playerY = height / 2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey-firefly and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  // The background color is now a dark indigo color to
  // mimic a night sky
  background(59, 32, 102);

  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();

    // Add a fuction for the tiny fireflies
    drawTinyFireflies();

    drawPlayer();
  } else {
    showGameOver();
    // Added function to check on the reset
    checkResetGame();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  } else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  } else {
    playerVY = 0;
  }
  //When the shift button is pressed, player will sprint
  if (keyIsDown(SHIFT)) {
    playerMaxSpeed = 4;
  }
  //When the sift button is released, player resets
  else {
    playerMaxSpeed = 2
  }
}

// When spacebar is pressed, game will reset
function resetGame() {
  // Position of prey and player will reset
  setupPrey();
  setupPlayer();
  // movement and speed of prey will reset
  movePrey();
  // sound will replay
  nightSound.play();
  // Size and color of player will reset
  playerRadius = 20;
  firegreen = 0;
  // score will reset
  preyEaten = 0;
  // prey speed will reset
  preyMaxSpeed = 4
  // All of this when game is over
  gameOver = false;
}
// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX = playerX + playerVX;
  playerY = playerY + playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    // Off the left side, so add the width to reset to the right
    playerX = playerX + width;
  } else if (playerX > width) {
    // Off the right side, so subtract the width to reset to the left
    playerX = playerX - width;
  }

  if (playerY < 0) {
    // Off the top, so add the height to reset to the bottom
    playerY = playerY + height;
  } else if (playerY > height) {
    // Off the bottom, so subtract the height to reset to the top
    playerY = playerY - height;
  }
}

// updateHealth()
//
// Reduce the player's health (happens every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health
  playerHealth = playerHealth - 0.5;
  // Constrain the result to a sensible range
  playerHealth = constrain(playerHealth, 0, playerMaxHealth);

  //When the shift button is pressed, player's health
  //will decrease faster, especially without the constrain
  if (keyIsDown(SHIFT)) {
    playerHealth = playerHealth - 2;
  }
  //When the sift button is released, the health
  //will decrease at it's normal rate
  else {
    playerHealth = playerHealth - 0.5;
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
  }

  // Check if the player is dead (0 health)
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey-firefly and updates health of both
function checkEating() {
  // Get distance of player to prey-firefly
  let d = dist(playerX, playerY, preyX, preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = playerHealth + eatHealth;
    // Constrain to the possible range
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
    // Reduce the prey-firefly health
    preyHealth = preyHealth - eatHealth;
    // Constrain to the possible range
    preyHealth = constrain(preyHealth, 0, preyMaxHealth);

    // Check if the prey-firefly died (health 0)
    if (preyHealth === 0) {
      // Move the "new" prey-firefly to a random position
      preyX = random(0, width);
      preyY = random(0, height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey-firefly were eaten
      preyEaten = preyEaten + 1;
      // Whenever the player eats the prey-firefly,
      // the player will increase in size.
      playerRadius = playerRadius + 2;
      // Whenever the player eats the prey-firefly,
      // the firefly will move faster.
      preyMaxSpeed += 2;
      // Each time the player eats a firefly,
      // the color green will be added to the player's
      // color to become more and more orange
      firegreen += 25;
      // Constrain stops the color to reaching black and
      // stick to yellow
      firegreen = constrain(firegreen, 0, 255);
      // A pop sound happens whenever the prey-firefly is eaten
      eatenSound.play();
    }
  }
}

// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {
  // Change the prey-firefly's velocity at random intervals
  // random() will be < 0.05 5% of the time, so the prey-firefly
  // will change direction on 5% of frames
  if (random() < 0.05) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    //
    //I changed random() to noise ()
    //Map()will convert the 0-1 range of the noise function
    // to the appropriate range of velocities for the prey-firefly
    preyVX = map(noise(preytx), 0, 1, -preyMaxSpeed, preyMaxSpeed);
    preyVY = map(noise(preyty), 0, 1, -preyMaxSpeed, preyMaxSpeed);
  }
  // Changed it make the prey-firefly move in a less
  // symetrical way.
  preytx += 0.1
  preyty += 0.5

  // Update prey-firefly position based on velocity
  preyX = preyX + preyVX;
  preyY = preyY + preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX = preyX + width;
  } else if (preyX > width) {
    preyX = preyX - width;
  }

  if (preyY < 0) {
    preyY = preyY + height;
  } else if (preyY > height) {
    preyY = preyY - height;
  }
}

// drawPrey()
//
// Draw the prey-firefly as an ellipse with alpha based on health
function drawPrey() {
  // The prey is now a firefly with
  //  a yellow body
  fill(252, 250, 96);
  // light yellow stroke to give the body a glow
  // It is now the stroke that disappears when being eaten
  // The player sucks out the light
  stroke(255, 254, 166, preyHealth);
  strokeWeight(15)
  ellipse(preyX, preyY, preyRadius * 2);
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha value based on health
function drawPlayer() {
  // The red stroke mimics a glow
  // The stroke will determine the player's health
  stroke(255, 0, 0, playerHealth)
  strokeWeight(20);
  //the player will start red but becomes more and more
  // orange whenever it eats a firefly
  // Thanks to the firegreen variable
  fill(255, firegreen, 0);
  ellipse(playerX, playerY, playerRadius * 2);
}
// Here we draw the tiny fireflies
// They are only there as part of the background
function drawTinyFireflies() {
  let segmentDrawn = 0;
  // The number of flies will loop until numFlies
  // They are going to be placed at random places
  // to give illusion of movement
  while (segmentDrawn < numFlies) {
    fireflyX = random(0, width);
    fireflyY = random(0, height);
    // Strake and stroke weight of the tiny fireflies
    stroke(255, 254, 166, preyHealth)
    strokeWeight(15)
    // Position and Size
    ellipse(fireflyX, fireflyY, fireflySize)
    // Segments are being drawn
    segmentDrawn++
  }
}


// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  // drwaTinyFireflies is here to keep the fireflies during
  // game over
  drawTinyFireflies();
  // Set up the font
  textFont("LUCUDIA BRIGHT");
  textSize(32);
  textAlign(CENTER, CENTER);
  noStroke();
  // color is light yellow to stand out better
  fill(255, 254, 166);
  // Set up the text to display
  let gameOverText = "GAME OVER\n"; // \n means "new line"
  gameOverText = gameOverText + "You ate " + preyEaten + " fireflies\n";
  gameOverText = gameOverText + "before you died.\n\n"
  // Display it in the centre of the screen
  text(gameOverText, width / 2, height / 2);

  // Added text to tell player how to try again
  textSize(20)
  text("Press the SPACEBAR to TRY AGAIN", 250, 400);

}
// Fuction for chectResetGame
function checkResetGame() {
  // Game will reset when the spacebar is pressed
  if (keyIsDown(32)) {
    resetGame();
  }
}
