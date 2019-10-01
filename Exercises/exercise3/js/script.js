"use strict";

/******************************************************************************
Where's Sausage Dog?
by Pippin Barr
Modified by Lilia Isabel Aguirre Lugo

An algorithmic version of a Where's Wally/Waldo searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
let targetX;
let targetY;
let targetImage;
//Declared the variables of the dogs velocity
//to allow the dog to move
let vX;
let vY;

// The ten decoy images
let decoyImage1;
let decoyImage2;
let decoyImage3;
let decoyImage4;
let decoyImage5;
let decoyImage6;
let decoyImage7;
let decoyImage8;
let decoyImage9;
let decoyImage10;

//I increased the number of decoys to appear on screen
let numDecoys = 130;

// Keep track of whether they've won
let gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  //the velocity of the dog
  vX=5;
  vY=-5;

  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);

  //I draw the dog first so that it is behind the decoys
  targetX = random(0,width);
  targetY = random(0,height);
  image(targetImage,targetX,targetY);

  // Use a for loop to draw as many decoys as we need
  for (let i = 0; i < numDecoys; i++) {
    // Choose a random location on the canvas for this decoy
    let x = random(0,width);
    let y = random(0,height);
    // Generate a random number we can use for probability
    let r = random();
    // Use the random number to display one of the ten decoy

    //I want specific images to have a certain probability of appearing
    //Images with 5% probability
    //They have lower probability since they look
    //least like the dog
    if (r < 0.05) {
      image(decoyImage5,x,y);
    }
    else if (r < 0.1) {
      image(decoyImage4,x,y);
    }
    else if (r < 0.15) {
      image(decoyImage9,x,y);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y);
    }
    //Images with 10% probability
    else if (r < 0.3) {
    image(decoyImage8,x,y);
    }
    else if (r < 0.4) {
        image(decoyImage3,x,y);
    }
    else if (r < 0.5) {
    image(decoyImage10,x,y);
    }
    else if (r < 0.6) {
    image(decoyImage1,x,y);
    //Images with 20% probability
    //They have higher probability since it looks
    //the most like the dog
    }
    else if (r < 0.8) {
    image(decoyImage7,x,y);
    }
    else if (r < 1.0) {
      image(decoyImage6,x,y);
    }
  }
}


// draw()
//
// Displays the game over screen if the player has won,
// otherwise nothing (all the gameplay stuff is in mousePressed())
function draw() {

  // Creating a sign which will display the sausage dog
  // grey rectangle
    fill(245)
    rect(0,0,200,300);
  //sausage dog placed in the center
    image(targetImage,100,150);
  //text
  //FIND
  textFont("Times New Roman");
  textSize(80);
  textAlign(LEFT,TOP);
  fill(0);
  text("FIND",5,0);
  //ME!
  textFont("Times New Roman");
  textSize(80);
  textAlign(LEFT,TOP);
  fill(0);
  text("ME!",28, 210);

// Game Over
  if (gameOver) {
    // Prepare our typography
    //the background is blue
    background(40, 192, 235);
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));

    //I let the player know that they've won nothing
    text("YOU WIN NOTHING!",width/2,height/2);

  //Make the dog bounce from wall to wall
  if (targetY<0){
  vY=vY*-1;
  }
  if (targetX>width){
  vX=vX*-1;
  }
 if (targetY>height){
    vY=vY*-1;
 }
 if (targetX<0){
   vX=vX*-1;
 }
 //starting point of the dog
 targetX=targetX+vX;
 targetY=targetY+vY;
 image(targetImage,targetX,targetY);
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // The mouse was clicked!
  // Check if the cursor is in the x range of the target
  // (We're subtracting the image's width/2 because we're using imageMode(CENTER) -
  // the key is we want to determine the left and right edges of the image.)
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the cursor is also in the y range of the target
    // i.e. check if it's within the top and bottom of the image
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}
