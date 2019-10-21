// Predator-Prey Simulation
// by Pippin Barr
//
// Modified by Lilia Isabel Aguirre Lugo
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// The predators are renamed to fit ocean theme
// Our predators
let shark;
// Addde 2 more predators
let jelly;
let octopus;

// The three prey
let turtle;
let fish;
let shrimp;

// Added preload function
function preload() {
  // Loaded underwater image
  underwater = loadImage("assets/images/Underwater.png")


}

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
  shark = new Predator(200, 150, color(120), 40,
    UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 0, 20, 40, SHIFT);
  // Added values to jelly and octopus
  jelly = new Predator(windowWidth / 2, 600, color(0, 24, 179), 40,
    87, 83, 65, 68, 0, windowWidth / 9 * 3.5, 650, 70);
  octopus = new Predator(1300, 150, color(161, 0, 51), 40,
    73, 75, 74, 76, 0, 1180, 40, 72);

  // The preys start from the center
  turtle = new Prey(windowWidth / 2, windowHeight / 2, 10, color(13, 153, 0), 50);
  fish = new Prey(windowWidth / 2, windowHeight / 2, 8, color(252, 202, 83), 60);
  shrimp = new Prey(windowWidth / 2, windowHeight / 2, 20, color(255, 150, 171), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // the background is now blue that looks like water
  background(underwater);

  // Handle input for the shark,
  shark.handleInput();
  // jelly and octopus
  jelly.handleInput();
  octopus.handleInput();

  // Move all the "animals"
  shark.move();
  jelly.move();
  octopus.move();

  turtle.move();
  fish.move();
  shrimp.move();

  // Handle the shark eating any of the prey
  shark.handleEating(turtle);
  shark.handleEating(fish);
  shark.handleEating(shrimp);
  // Handle the jelly eating any of the prey
  jelly.handleEating(turtle);
  jelly.handleEating(fish);
  jelly.handleEating(shrimp);
  // Handle the octopus eating any of the prey
  octopus.handleEating(turtle);
  octopus.handleEating(fish);
  octopus.handleEating(shrimp);

  // Display all the "animals"
  shark.display();
  jelly.display();
  octopus.display();

  turtle.display();
  fish.display();
  shrimp.display();
}
