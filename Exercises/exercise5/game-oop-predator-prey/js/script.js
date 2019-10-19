// Predator-Prey Simulation
// by Pippin Barr
//
// Modified by Lilia Isabel Aguirre Lugo
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predators
let tiger;
// Addde 2 more predators
let puma;
let jaguar;

// The three prey
let antelope;
let zebra;
let bee;
// setup()
//
// Sets up a canvas
// Creates objects for the predators and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Each predator has different
  // color, input properties, score keeper and placement

  // the score keepers are places allong side the predator to
  // distinguished which belongs to who
  tiger = new Predator(200, 150, 5, color(200, 200, 0), 40,
    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 0, 20, 40);
  // Added values to puma and jaguar
  puma = new Predator(windowWidth / 2, 600, 5, color(200, 0, 200), 40,
    87, 83, 65, 68, 0, windowWidth / 9 * 3.5, 650);
  jaguar = new Predator(1300, 150, 5, color(0, 200, 200), 40,
    73, 75, 74, 76, 0, 1180, 40);

  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger,
  tiger.handleInput();
  // puma and jaguar
  puma.handleInput();
  jaguar.handleInput();

  // Move all the "animals"
  tiger.move();
  puma.move();
  jaguar.move();

  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);
  // Handle the puma eating any of the prey
  puma.handleEating(antelope);
  puma.handleEating(zebra);
  puma.handleEating(bee);
  // Handle the jaguar eating any of the prey
  jaguar.handleEating(antelope);
  jaguar.handleEating(zebra);
  jaguar.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  puma.display();
  jaguar.display();

  antelope.display();
  zebra.display();
  bee.display();
}
