// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Catching Happiness
// by Lilia Isabel Aguirre Lugo
// This game has a predator that chases after ther preys, but there is also an
// enemy that will incovenience the predator. The predator is moves using the
// arrow keys, increases in speed when consuming a prey and slows down when
// interacting with the ennemy.
//******************************************************************************


// Variable for predator
let natasha;

// Array for prey
let happybits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

// Variable for enemy
let negativityBall;

// Variable for background image
let tileFloor;
// Variable for titleScreen image
let hallway;
// Variable for negativity ball image
let badBall;

// Variable for eating sound
let eaten;

// Variable for Playing
let playing = false;
// Variable for Game Over
let gameOver = false;

// Preload
//
function preload() {
  // loading images
  tileFloor = loadImage("assets/images/Tilefloor.jpg");
  hallway = loadImage("assets/images/TitleScreen.jpg");
  badBall = loadImage("assets/images/evilball.png");
  // Loading sounds
  eaten = loadSound("assets/sounds/Blop(MOD_1).wav");
}

// Setup
//
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup the predator
  natasha = new Predator(windowWidth / 2, windowHeight / 2, 100, color(207, 143, 60), 0, eaten);

  // Setup the prey
  happybits[0] = new Prey(300, 300, 20, color(255, 0, 0), color(252, 115, 93,200));
  happybits[1] = new Prey(400, 500, 20, color(255, 0, 0), color(252, 115, 93,200));
  happybits[2] = new Prey(1300, 1300, 20, color(255, 149, 43), color(252, 115, 93,200));
  happybits[3] = new Prey(700, 1000, 20, color(255, 149, 43), color(252, 115, 93,200));
  happybits[4] = new Prey(800, 300, 20, color(206, 245, 144), color(252, 115, 93,200));
  happybits[5] = new Prey(300, 500, 20, color(206, 245, 144), color(252, 115, 93,200));
  happybits[6] = new Prey(300, 300, 20, color(255, 0, 0), color(255, 222, 89,200));
  happybits[7] = new Prey(400, 500, 20, color(255, 0, 0), color(255, 222, 89,200));
  happybits[8] = new Prey(1300, 1300, 20, color(255, 149, 43), color(255, 222, 89,200));
  happybits[9] = new Prey(700, 1000, 20, color(255, 149, 43), color(255, 222, 89,200));
  happybits[10] = new Prey(800, 300, 20, color(206, 245, 144), color(255, 222, 89,200));
  happybits[11] = new Prey(300, 500, 20, color(206, 245, 144), color(255, 222, 89,200));
  happybits[12] = new Prey(300, 300, 20, color(255, 0, 0), color(252, 115, 93,200));
  happybits[13] = new Prey(400, 500, 20, color(255, 0, 0), color(252, 115, 93,200));
  happybits[14] = new Prey(1300, 1300, 20, color(255, 149, 43), color(252, 115, 93,200));
  happybits[15] = new Prey(700, 1000, 20, color(255, 149, 43), color(252, 115, 93,200));
  happybits[16] = new Prey(800, 300, 20, color(206, 245, 144), color(252, 115, 93,200));
  happybits[17] = new Prey(300, 500, 20, color(206, 245, 144), color(252, 115, 93,200));
  happybits[18] = new Prey(300, 300, 20, color(255, 0, 0), color(255, 222, 89,200));
  happybits[19] = new Prey(400, 500, 20, color(255, 0, 0), color(255, 222, 89,200));
  happybits[20] = new Prey(1300, 1300, 20, color(255, 149, 43), color(255, 222, 89,200));
  happybits[21] = new Prey(700, 1000, 20, color(255, 149, 43), color(255, 222, 89,200));
  happybits[22] = new Prey(800, 300, 20, color(206, 245, 144), color(255, 222, 89,200));
  happybits[23] = new Prey(300, 500, 20, color(206, 245, 144), color(255, 222, 89,200));
  // Setup the enemy
  negativityBall = new Enemy(-500, windowHeight / 2, 5, 300, badBall);

}

// Draw
//
function draw() {
  // When the game is opened, there will be a title screen
  if (playing === false){
    titleScreen();
  // Game starts
  }
  else if (gameOver === false && playing === true){
  // Background is an image of a tile floor
  background(tileFloor);

  // All of natasha's properties
  // Handle Input and Move
  natasha.handleInput();
  natasha.move()
  // Handle eating
  natasha.handleScore(happybits[0]);
  natasha.handleScore(happybits[1]);
  natasha.handleScore(happybits[2]);
  natasha.handleScore(happybits[3]);
  natasha.handleScore(happybits[4]);
  natasha.handleScore(happybits[5]);
  natasha.handleScore(happybits[6]);
  natasha.handleScore(happybits[7]);
  natasha.handleScore(happybits[8]);
  natasha.handleScore(happybits[9]);
  natasha.handleScore(happybits[10]);
  natasha.handleScore(happybits[11]);
  natasha.handleScore(happybits[12]);
  natasha.handleScore(happybits[13]);
  natasha.handleScore(happybits[14]);
  natasha.handleScore(happybits[15]);
  natasha.handleScore(happybits[16]);
  natasha.handleScore(happybits[17]);
  natasha.handleScore(happybits[18]);
  natasha.handleScore(happybits[19]);
  natasha.handleScore(happybits[20]);
  natasha.handleScore(happybits[21]);
  natasha.handleScore(happybits[22]);
  natasha.handleScore(happybits[23]);
  // Display
  natasha.display();

  // All of happybits' properties
  // Move
  happybits[0].move();
  happybits[1].move();
  happybits[2].move();
  happybits[3].move();
  happybits[4].move();
  happybits[5].move();
  happybits[6].move();
  happybits[7].move();
  happybits[8].move();
  happybits[9].move();
  happybits[10].move();
  happybits[11].move();
  happybits[12].move();
  happybits[13].move();
  happybits[14].move();
  happybits[15].move();
  happybits[16].move();
  happybits[17].move();
  happybits[18].move();
  happybits[19].move();
  happybits[20].move();
  happybits[21].move();
  happybits[22].move();
  happybits[23].move();
  // Display
  happybits[0].display();
  happybits[1].display();
  happybits[2].display();
  happybits[3].display();
  happybits[4].display();
  happybits[5].display();
  happybits[6].display();
  happybits[7].display();
  happybits[8].display();
  happybits[9].display();
  happybits[10].display();
  happybits[11].display();
  happybits[12].display();
  happybits[13].display();
  happybits[14].display();
  happybits[15].display();
  happybits[16].display();
  happybits[17].display();
  happybits[18].display();
  happybits[19].display();
  happybits[20].display();
  happybits[21].display();
  happybits[22].display();
  happybits[23].display();

  // All of negativityBall's properties
  // Move
  negativityBall.move(natasha.preyEaten);
  // Display
  negativityBall.display();
  // Reset
  negativityBall.reset(natasha.preyEaten);
  // Handle Game Over
  negativityBall.handleGameOver(natasha);
}
// When game ends, an end screen will appear
else if (gameOver === true){
  endScreen();
}

// Title Screen
// Gives the goal of the game and how to start the game
function titleScreen(){
  // Game Title
  background(hallway);
  push();
  textAlign(CENTER,TOP);
  fill(255, 222, 89);
  textSize(80);
  text("Catching Happiness",windowWidth/2, 50);
  pop();
  // Story and Instructions
  push();
  textAlign(LEFT,TOP);
  fill(255, 222, 89);
  textSize(35);
  text("Natasha has been feeling\nvery sad for many months\nand hasn't been able make\nherself feel better. Suddenly,\nshe finds these little bright\nflames that make her happy\nwhen she catches them.\nShe calls them happybits.", windowWidth/2.8, 200);
  text("Using the ARROW keys,\nhelp Natasha collect as many\nhappybits as possible to help\nher achieve happiness. Avoid\nthe negativity balls because\nafter 3 hits, it's game over.",windowWidth/1.5, 245);
  pop();
  // Start Game
  push();
  textAlign(CENTER,TOP);
  fill(255, 222, 89);
  textSize(50);
  text("Press the SPACEBAR to start", windowWidth/1.6, windowHeight/1.2);
  pop();

}

// End Screen
// Reaveals the amount of happybits collected
function endScreen(){
  background(tileFloor);

  textAlign(CENTER,TOP);
  stroke(252, 115, 93,200);
  strokeWeight(10);
  fill(255, 149, 43);
  textSize(50);
  text("You helped Natasha collect "+ natasha.preyEaten +" happybits!", windowWidth/2, windowHeight/4);
  text("But it is not enough to make her happy", windowWidth/2, windowHeight/2);
}

// When the spacebar is pressed, the game will start
if (keyIsDown(32)){
  playing = true;
}
}
