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

// Array for prey
let happybits = [ 1, 2, 3, 4, 5, 6]

// Variable for enemy
let negativityBall;

// Setup
//
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup the predator
  humanChild = new Predator(windowWidth / 2, windowHeight / 2, 10, 60, color(207, 143, 60),0);

  // Setup the prey
  happybits[0] = new Prey(300, 300, 20, color(255, 0, 0), color(0, 0, 255));
  happybits[1] = new Prey(400, 500, 20, color(255, 0, 0), color(0, 0, 255));
  happybits[2] = new Prey(1300, 1300, 20, color(255, 0, 0), color(0, 0, 255));
  happybits[3] = new Prey(700, 1000, 20, color(255, 0, 0), color(0, 0, 255));
  happybits[4] = new Prey(800, 300, 20, color(255, 0, 0), color(0, 0, 255));
  happybits[5] = new Prey(300, 500, 20, color(255, 0, 0), color(0, 0, 255));

  // Setup the enemy
  negativityBall = new Enemy(-500, windowHeight/2, 5, color(100,0,255), color(150,0,200,100), 300);

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
  happybits[0].move();
  happybits[1].move();
  happybits[2].move();
  happybits[3].move();
  happybits[4].move();
  happybits[5].move();

  negativityBall.move(humanChild.preyEaten);
  // Handle eating
  humanChild.handleScore(happybits[0]);
  humanChild.handleScore(happybits[1]);
  humanChild.handleScore(happybits[2]);
  humanChild.handleScore(happybits[3]);
  humanChild.handleScore(happybits[4]);
  humanChild.handleScore(happybits[5]);

  // Display
  humanChild.display();
  happybits[0].display();
  happybits[1].display();
  happybits[2].display();
  happybits[3].display();
  happybits[4].display();
  happybits[5].display();

  negativityBall.display();
  // Reset
  negativityBall.reset(humanChild.preyEaten);

}
