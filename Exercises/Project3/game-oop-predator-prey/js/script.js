// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// THIS WILL BE THE GAMES TITLE
// by Lilia Isabel Aguirre Lugo
// This game has a predator that chases after ther preys, but there is also an
// enemy that will incovenience the predator. The predator is moves using the
// arrow keys, increases in speed when consuming a prey and slows down when
// interacting with the ennemy.
//******************************************************************************


// Variable for predator
let humanChild;

// Variable for prey
let happybits;

// Setup
//
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup the predator
  humanChild = new Predator(windowWidth / 2, windowHeight / 2, 10, 60, color(207, 143, 60));

  // Setup the prey
  happybits = new Prey(300, 300, 20, color(255, 0, 0), color(0, 0, 255));

}

// Draw
//
function draw() {
  // Background is dark purple
  background(49, 0, 87);
  // Handle input
  humanChild.handleInput();
  // Move
  humanChild.move()
  happybits.move();
  // Handle eating
  humanChild.handleEating(happybits);
  // Display
  humanChild.display();
  happybits.display();

}
