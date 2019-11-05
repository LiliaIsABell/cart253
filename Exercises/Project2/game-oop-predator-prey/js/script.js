// Predator-Prey Simulation
// by Pippin Barr
//
// Modified by Lilia Isabel Aguirre Lugo
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// Created Array for the Prey
let dustBunnies = [1,2,3]

// The enemies
let hunter;
let tourist

// The power up
let powerUp;

// The background image
let carpet;

// The prey image
let dustbunny;

// The predator image
let vaccum;

// The enemy image
let marble;

// The CatMeow font
let dusty;

// Variable for when the game is not active
let playing = false;

// Variable for when the game is over
let gameOver = false;

// Added function preload
function preload() {

  // Loading carpet image
  carpet = loadImage("assets/images/carpet.jpg");
  // Loading dust bunny image
  dustbunny = loadImage("assets/images/dustbunny.png");
  // Loading vaccum image
  vaccum = loadImage("assets/images/vaccum.png");
  // Loading marble image
  marble = loadImage("assets/images/marble.png");
  // Loading CatMeow font
  dusty = loadFont("assets/fonts/catMeow.ttf");
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  // The predator has a variable for the image
  tiger = new Predator(100, 100, 5, color(74, 39, 39), 60, vaccum,0);
  // The preys have a variable for the image
  dustBunnies[0] = new Prey(100, 100, 10, color(255, 100, 10), 60, dustbunny);
  dustBunnies[1] = new Prey(100, 100, 8, color(255, 255, 255), 100, dustbunny);
  dustBunnies[2] = new Prey(100, 100, 20, color(255, 255, 0), 40, dustbunny);
  // Setup for the enemies
  hunter = new Enemy(windowWidth/2, 0, 5, 20, marble);
  tourist = new Enemy(windowWidth/4, 0, 5, 20, marble);
  // Setup the power up
  powerUp = new Powerup(windowWidth, windowHeight/2, 10, 40, color(3, 252, 94), color(3, 73, 252), 20);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

  // When the game is not playing, there will be a title screen
  if (playing === false) {
    // Declared function for title screen
    titleScreen();
  }

  // When gameOver is false and playing is true,
  // the game will start and the player can play
  else if (gameOver === false && playing === true) {
    // The background is an image of a carpet
    background(carpet);

    // Handle input for the tiger
    tiger.handleInput();

    // Move all the "animals"
    tiger.move();
    dustBunnies[0].move();
    dustBunnies[1].move();
    dustBunnies[2].move();
    // Move the humans
    hunter.move();
    tourist.move();
    // Move power up
    powerUp.move();


    // Handle the tiger eating any of the prey
    tiger.handleEating(dustBunnies[0]);
    tiger.handleEating(dustBunnies[1]);
    tiger.handleEating(dustBunnies[2]);

    // Handle the absorbtion of the power up
    powerUp.handleAbsorb(tiger, dustBunnies[0]);
    powerUp.handleAbsorb(tiger, dustBunnies[1]);
    powerUp.handleAbsorb(tiger, dustBunnies[2]);



    // Display all the "animals"
    tiger.display();
    dustBunnies[0].display();
    dustBunnies[1].display();
    dustBunnies[2].display();
    // Display the humans
    hunter.display();
    tourist.display();
    // Display power up
    powerUp.display();

    // Reset the humans position
    hunter.reset();
    tourist.reset();

    // Game Over when humans gets the tiger
    hunter.handleGameOver(tiger);
    tourist.handleGameOver(tiger);
  }

  // When the game is over, there is an ending screen that appears
  else if (gameOver === true) {
    endScreen();
  }
}

// Title screen fuction
function titleScreen() {
  push();
  // The background is carpet
  background(carpet);
  // Brown title
  fill(74, 39, 39);
  // The font will be the CatMeow font
  textFont(dusty);
  textAlign(CENTER, TOP);
  textSize(80);
  text("Dust Bunnies", windowWidth / 2, windowHeight / 18);
  textSize(40);
  text("Click the Mouse to Play",windowWidth/2,650);
  pop();

  push();
  // Intro
  fill(74, 39, 39);
  // CatMeow font
  textFont(dusty);
  textAlign(CENTER, TOP);
  textSize(20);
  text("Dust bunnies have cursed your vaccum and are causing mayhem\n\n Vaccum up as many as possible before your vaccum dissapears",
    windowWidth / 2, windowHeight / 4);

  // Instructions
  //
  // How to Move
  image(vaccum, windowWidth / 40, windowHeight / 2.5, 300, 300);

  textAlign(CENTER, TOP);
  textSize(20);
  text("Use the arrow keys \n\n to move your vaccum", windowWidth / 3.5, windowHeight / 1.7);

  // Warnings
  image(marble,1205,windowHeight / 2.5, 50, 50);

  textAlign(CENTER, TOP);
  textSize(20);
  text("Avoid the green marbles \n Or Game Over",1230,370);
  pop();
}

// Ending screen function
function endScreen() {

  background(carpet);

  textAlign(CENTER, TOP);
  fill(74, 39, 39);
  textFont(dusty);
  textSize(100);
  text("GAME OVER", windowWidth / 2, windowHeight / 3);


}

// When the mouse is clicked, the game will start
function mouseClicked() {
  if (playing === false) {
    playing = true;
  }
}
