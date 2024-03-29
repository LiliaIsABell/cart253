// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

// Declaring the varialbles for the word HELP

// position and size of H
let h = "H";
let hSize = 160;
let hX = -160;
let hY = 0;
// position and size of E
let e = "E";
let eSize = 160;
let eX = -160;
let eY = 320;
// position and size of L
let l = "L";
let lSize = 160;
let lX = -160;
let lY = 480;
// position and size of P
let p = "P";
let pSize = 160;
let pX = -160;
let pY = 640;

// Declaring the variable for the clown images
let rat;

// Declaring the variables for the triangle
//By doing this I relate all the points of the triangle
let triX = 160;
let triY = 640;



// here is were I loaded the image of the clown
function preload() {
rat = loadImage ("assets/images/clown.png");

}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);


  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;

  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();


}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {

  // We don't fill the background so we get a drawing effect


  //the triangle is purple
  fill(150,0,255);
  ////Coordinates and size of the triangle
  triangle (triX+160,triY-320, triX, triY, triX+320, triY);
  //the triangle is moving form down to up
  triY -=1


  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(0,0,255,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);

  //Moving the word HELP left to right
  // All the letters are in yellow

  // letter H
  hX += 1
  textAlign(LEFT, TOP);
  fill (255,255,0);
  textSize(160);
  text(h,hX,hY);
  // letter e
  eX +=1
  textAlign(LEFT, BOTTOM);
  fill (255,255,0);
  textSize(160);
  text(e,eX,eY);
  // letter l
  lX += 1
  textAlign(LEFT, BOTTOM);
  fill (255,255,0);
  textSize(160);
  text(l,lX,lY);
  // letter p
  pX += 1
  textAlign(LEFT, BOTTOM);
  fill (255,255,0);
  textSize(160);
  text(p,pX,pY);

  // Making the image of the clown move with the mouse
  imageMode(CENTER)
  // mouse is now placed at the center on the image
  image (rat, mouseX, mouseY,);





}
