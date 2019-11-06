// Predator-Prey Simulation
// by Pippin Barr
//
// Modified by Lilia Isabel Aguirre Lugo
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.
// When the predator come in contact with an enemy, the game will end.
// With the consumption of a powerup, the predator will move faster.


// Our predator
let vaccumCleaner;

// Array for the Preys
let dustBunnies = [1, 2, 3];

// Array for the Enemies
let marbles = [1, 2];

// The power up
let powerUp;

// Array for Images used
let images = ["carpet", "dustbunny", "vaccum", "marble"]

// The CatMeow font
let dusty;

// Variable for when the game is not active
let playing = false;

// Variable for when the game is over
let gameOver = false;

// Added function preload
function preload() {

  // Loading carpet image
  images[0] = loadImage("assets/images/carpet.jpg");
  // Loading dust bunny image
  images[1] = loadImage("assets/images/dustbunny.png");
  // Loading vaccum image
  images[2] = loadImage("assets/images/vaccum.png");
  // Loading marble image
  images[3] = loadImage("assets/images/marble.png");
  // Loading CatMeow font
  dusty = loadFont("assets/fonts/CatMeow.ttf");
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator, preys, enemies and powerup
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Setup predator
  vaccumCleaner = new Predator(100, 100, 5, 60, images[2], 0);
  // Setup prey
  dustBunnies[0] = new Prey(windowWidth / 2, windowHeight / 2, 10, 60, images[1]);
  dustBunnies[1] = new Prey(windowWidth / 2, windowHeight / 2, 8, 100, images[1]);
  dustBunnies[2] = new Prey(windowWidth / 2, windowHeight / 2, 20, 40, images[1]);
  // Setup enemy
  marbles[0] = new Enemy(windowWidth / 2, -40, 5, 20, images[3]);
  marbles[1] = new Enemy(windowWidth / 4, -80, 5, 20, images[3]);
  // Setup powerup
  powerUp = new Powerup(windowWidth, windowHeight / 2, 20, 10, color(3, 252, 94), color(3, 73, 252, 110), 5);
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
    background(images[0]);

    // Handle input for the vaccumCleaner
    vaccumCleaner.handleInput();

    // Move all the elements
    vaccumCleaner.move();
    dustBunnies[0].move();
    dustBunnies[1].move();
    dustBunnies[2].move();
    // Move the Enemies
    marbles[0].move();
    marbles[1].move();
    // Move powerup
    powerUp.move();


    // Handle the vaccumCleaner eating any of the prey
    vaccumCleaner.handleEating(dustBunnies[0]);
    vaccumCleaner.handleEating(dustBunnies[1]);
    vaccumCleaner.handleEating(dustBunnies[2]);

    // Handle the absorbtion of the powerup
    powerUp.handleAbsorb(vaccumCleaner);

    // Display all the elements
    vaccumCleaner.display();
    dustBunnies[0].display();
    dustBunnies[1].display();
    dustBunnies[2].display();
    // Display the Enemies
    marbles[0].display();
    marbles[1].display();
    // Display powerup
    powerUp.display();

    // Reset the Enemies position
    // Also, by putting vaccumCleaner.preysEaten in the
    // parantheses, the marbles will only drop
    // when the player scores over 5 points
    marbles[0].reset(vaccumCleaner.preysEaten);
    marbles[1].reset(vaccumCleaner.preysEaten);

    // Game Over when Enemies gets the vaccumCleaner
    marbles[0].handleGameOver(vaccumCleaner);
    marbles[1].handleGameOver(vaccumCleaner);
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
  background(images[0]);
  // Brown title
  fill(74, 39, 39);
  // The font will be the CatMeow font
  textFont(dusty);
  textAlign(CENTER, TOP);
  textSize(80);
  text("Dust Bunnies", windowWidth / 2, windowHeight / 18);
  textSize(40);
  text("Click the Mouse to Play", windowWidth / 2, 650);
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
  image(images[2], windowWidth / 40, windowHeight / 2.5, 300, 300);

  textAlign(CENTER, TOP);
  textSize(20);
  text("Use the arrow keys \n\n to move your vaccum", windowWidth / 3.5, windowHeight / 1.7);

  // Warning
  image(images[3], 1025, windowHeight / 2.5, 50, 50);

  textAlign(CENTER, TOP);
  textSize(20);
  text("Avoid the green marbles \n Or Game Over", 1050, 370);


  // Advice
  //image
  push();
  fill(3, 252, 94);
  strokeWeight(15);
  stroke(3, 73, 252, 110);
  ellipse(1230, 500, 30 * 2);
  pop();
  //text
  textAlign(CENTER, TOP);
  textSize(20);
  text("Try catching the energy ball\nfor more speed", 1230, 545);
  pop();
}

// Ending screen function
function endScreen() {

  background(images[0]);

  stroke(74, 39, 39);
  textAlign(CENTER, TOP);
  fill(255);
  textFont(dusty);
  textSize(100);
  text("Congrats", windowWidth / 2, windowHeight / 3);
  textSize(50);
  text(vaccumCleaner.preysEaten + "    dustbunnies were captured", windowWidth / 2, 500)


}

// When the mouse is clicked, the game will start
function mouseClicked() {
  if (playing === false) {
    playing = true;
  }
}
