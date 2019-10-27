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

// The three prey
let antelope;
let zebra;
let bee;

// The background image
let carpet;

// The prey image
let dustbunny;

// The predator image
let vaccum;

// Variable for when the game is not active
let playing = false;

// Added function preload
function preload() {

  // Loading carpet image
  carpet = loadImage("assets/images/carpet.jpg");
  // Loading dust bunny image
  dustbunny = loadImage("assets/images/dustbunny.png");
  // Loading vaccum image
  vaccum = loadImage("assets/images/vaccum.png");
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  // The predator has a variable for the image
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, vaccum);
  // The preys have a variable for the image
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50, dustbunny);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60, dustbunny);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10, dustbunny);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

// When the game is not playing, there will be a title screen
if (playing === false){
// Declared function for title screen
titleScreen();
}
// When the game is playing, everything will be displayed
else {

  // The background is an image of a carpet
  background(carpet);

  // Handle input for the tiger
  tiger.handleInput();

  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();
}
}

// Title screen fuction
function titleScreen(){
// The background is carpet
background(carpet);
// Brown title
fill(99,55,55);
textFont("Forte");
textAlign(CENTER,TOP);
textSize(80);
text("Dust Bunnies!",windowWidth/2,windowHeight/18);

}

// When the mouse is clicked, the game will start
function mouseClicked(){
  if (playing === false){
    playing = true;
  }
}