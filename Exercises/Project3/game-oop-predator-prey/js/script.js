// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Catching Happiness
// by Lilia Isabel Aguirre Lugo
// This game has a predator that chases after preys that makes the predator increase
// in speed, but when ther predator gets hit by the enemy, its speed will reset.
// The predator moves by using the arrow keys.
// After hitting the enemy three times, the game is over.
//******************************************************************************


// Variable for predator
let natasha;
// Array for prey
let happybits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
// Variable for enemy
let negativityBall;

// Array for Images
let loadedImages = ["tileFloor", "hallway", "negativityBall"];

// Array for Sounds
let loadedSounds = ["eaten", "hitByBall"];

// Variable for Playing
let playing = false;
// Variable for Game Over
let gameOver = false;

// Preload
//
function preload() {
  // loading images
  loadedImages[0] = loadImage("assets/images/Tilefloor.jpg");
  loadedImages[1] = loadImage("assets/images/TitleScreen.jpg");
  loadedImages[2] = loadImage("assets/images/evilball.png");
  // Loading sounds
  loadedSounds[0] = loadSound("assets/sounds/Blop(MOD_1).wav");
  loadedSounds[1] = loadSound("assets/sounds/doom_v2.wav");
}

// Setup
//
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup the predator
  natasha = new Predator(130, color(207, 143, 60), loadedSounds[0], loadedSounds[1]);

  // Setup the prey
  happybits[0] = new Prey(300, 300, 20, color(255, 0, 0), color(252, 115, 93, 200), 500);
  happybits[1] = new Prey(400, 500, 20, color(255, 0, 0), color(252, 115, 93, 200), 800);
  happybits[2] = new Prey(1300, 1300, 20, color(255, 149, 43), color(252, 115, 93, 200), 500);
  happybits[3] = new Prey(700, 1000, 20, color(255, 149, 43), color(252, 115, 93, 200), 800);
  happybits[4] = new Prey(800, 300, 20, color(206, 245, 144), color(252, 115, 93, 200), 500);
  happybits[5] = new Prey(300, 500, 20, color(206, 245, 144), color(252, 115, 93, 200), 800);
  happybits[6] = new Prey(300, 300, 20, color(255, 0, 0), color(255, 222, 89, 200), 500);
  happybits[7] = new Prey(400, 500, 20, color(255, 0, 0), color(255, 222, 89, 200), 800);
  happybits[8] = new Prey(1300, 1300, 20, color(255, 149, 43), color(255, 222, 89, 200), 500);
  happybits[9] = new Prey(700, 1000, 20, color(255, 149, 43), color(255, 222, 89, 200), 800);
  happybits[10] = new Prey(800, 300, 20, color(206, 245, 144), color(255, 222, 89, 200), 500);
  happybits[11] = new Prey(300, 500, 20, color(206, 245, 144), color(255, 222, 89, 200), 800);
  happybits[12] = new Prey(300, 300, 20, color(255, 0, 0), color(252, 115, 93, 200), 600);
  happybits[13] = new Prey(400, 500, 20, color(255, 0, 0), color(252, 115, 93, 200));
  happybits[14] = new Prey(1300, 1300, 20, color(255, 149, 43), color(252, 115, 93, 200), 600);
  happybits[15] = new Prey(700, 1000, 20, color(255, 149, 43), color(252, 115, 93, 200), 900);
  happybits[16] = new Prey(800, 300, 20, color(206, 245, 144), color(252, 115, 93, 200), 600);
  happybits[17] = new Prey(300, 500, 20, color(206, 245, 144), color(252, 115, 93, 200), 900);
  happybits[18] = new Prey(300, 300, 20, color(255, 0, 0), color(255, 222, 89, 200), 600);
  happybits[19] = new Prey(400, 500, 20, color(255, 0, 0), color(255, 222, 89, 200), 900);
  happybits[20] = new Prey(1300, 1300, 20, color(255, 149, 43), color(255, 222, 89, 200), 600);
  happybits[21] = new Prey(700, 1000, 20, color(255, 149, 43), color(255, 222, 89, 200), 900);
  happybits[22] = new Prey(800, 300, 20, color(206, 245, 144), color(255, 222, 89, 200), 600);
  happybits[23] = new Prey(300, 500, 20, color(206, 245, 144), color(255, 222, 89, 200), 900);
  // Setup the enemy
  negativityBall = new Enemy(-500, windowHeight / 2, 5, 300, loadedImages[2]);

}

// Draw
//
function draw() {

  // When the game is opened, there will be a title screen
  if (playing === false) {
    titleScreen();

    // Game starts
  } else if (gameOver === false && playing === true) {
    // Background is an image of a tile floor
    background(loadedImages[0]);

    //
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
    // Shrinking
    happybits[0].handleShrink();
    happybits[1].handleShrink();
    happybits[2].handleShrink();
    happybits[3].handleShrink();
    happybits[4].handleShrink();
    happybits[5].handleShrink();
    happybits[6].handleShrink();
    happybits[7].handleShrink();
    happybits[8].handleShrink();
    happybits[9].handleShrink();
    happybits[10].handleShrink();
    happybits[11].handleShrink();
    happybits[12].handleShrink();
    happybits[13].handleShrink();
    happybits[14].handleShrink();
    happybits[15].handleShrink();
    happybits[16].handleShrink();
    happybits[17].handleShrink();
    happybits[18].handleShrink();
    happybits[19].handleShrink();
    happybits[20].handleShrink();
    happybits[21].handleShrink();
    happybits[22].handleShrink();
    happybits[23].handleShrink();
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
  else if (gameOver === true) {

    endScreen();
    // Check reset allows to reset the game
    checkResetGame();

  }

  function resetGame() {
    // gameOver = false allows the game to restart
    gameOver = false;

    // the predator will reset
    natasha.gameOverReset();
    // the prey will reset
    happybits[0].gameOverReset();
    happybits[1].gameOverReset();
    happybits[2].gameOverReset();
    happybits[3].gameOverReset();
    happybits[4].gameOverReset();
    happybits[5].gameOverReset();
    happybits[6].gameOverReset();
    happybits[7].gameOverReset();
    happybits[8].gameOverReset();
    happybits[9].gameOverReset();
    happybits[10].gameOverReset();
    happybits[11].gameOverReset();
    happybits[12].gameOverReset();
    happybits[13].gameOverReset();
    happybits[14].gameOverReset();
    happybits[15].gameOverReset();
    happybits[16].gameOverReset();
    happybits[17].gameOverReset();
    happybits[18].gameOverReset();
    happybits[19].gameOverReset();
    happybits[20].gameOverReset();
    happybits[21].gameOverReset();
    happybits[22].gameOverReset();
    happybits[23].gameOverReset();
    // the enemy will reset
    negativityBall.gameOverReset(natasha);
  }

  // Title Screen
  // Gives the goal of the game and how to start the game
  function titleScreen() {
    // Game Title
    background(loadedImages[1]);
    push();
    textAlign(CENTER, TOP);
    fill(255, 222, 89);
    textSize(80);
    text("Catching Happiness", windowWidth / 2, 50);
    pop();
    // Story and Instructions
    push();
    textAlign(LEFT, TOP);
    fill(255, 222, 89);
    textSize(35);
    text("Natasha has been feeling\nvery sad for many months\nand hasn't been able make\nherself feel better. Suddenly,\nshe finds these little bright\nflames that make her happy\nwhen she catches them.\nShe calls them happybits.", windowWidth / 2.8, 200);
    text("Using the ARROW keys,\nhelp Natasha collect as many\nhappybits as possible to help\nher achieve happiness. Avoid\nthe negativity balls because\nafter 3 hits, it's game over.", windowWidth / 1.5, 245);
    pop();
    // Start Game
    push();
    textAlign(CENTER, TOP);
    fill(255, 222, 89);
    textSize(50);
    text("Press the SPACEBAR to start", windowWidth / 1.6, windowHeight / 1.2);
    pop();

  }

  // End Screen
  // Reaveals the amount of happybits collected
  // and tells you how to reset the game
  function endScreen() {
    background(loadedImages[0]);

    textAlign(CENTER, TOP);
    fill(255, 222, 89);
    textSize(50);
    text("You helped Natasha collect " + natasha.preyEaten + " happybits!\nBut it is not enough to make her happy.", windowWidth / 2, windowHeight / 5);
    text(" Want to keep helping her?\n\npress SPACEBAR to continue", windowWidth / 2, windowHeight / 2);

  }

  // When the spacebar is pressed, the game will start
  if (keyIsDown(32)) {
    playing = true;
  }

  // When the game ends, it will reset when pressing SPACEBAR
  function checkResetGame() {
    if (keyIsDown(32)) {
      resetGame();
    }
  }
}
