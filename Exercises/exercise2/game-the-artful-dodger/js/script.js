/******************************************************

Game - The Artful Dodger
Pippin Barr

A simple dodging game with keyboard controls

******************************************************/
// The position and size of the bubbles
let bubbleX;
let bubbleY;
let bubbleSize = 50;
// The position and size of our avatar circle
let avatarX;
let avatarY;
let avatarSize = 50;

// The speed and velocity of our avatar circle
let avatarSpeed = 10;
let avatarVX = 0;
let avatarVY = 0;

// The position and size of the enemy oval
let enemyX;
let enemyY;
let enemyW = 50;
let enemyH = 30

// The speed and velocity of our enemy circle
let enemySpeed = 5;
let enemyVX = 5;

// How many dodges the player has made
let dodges = 0;

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A pink background
  background(255,220,220);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }
  // The avatar is invisible until the player pushes the arrow keys
  // When pressing the left arrow, the avatar is
  // blue with a green outline
  if(keyIsDown(LEFT_ARROW)){
    stroke(0,0, 255);
    strokeWeight(5);
    fill(0, 255, 0);
    ellipse(avatarX,avatarY,avatarSize,avatarSize);
  }
  // When pressing the right arrow, the avatar is
  // green with a blue outline
  else if (keyIsDown(RIGHT_ARROW)){
    stroke(0, 255, 0);
    strokeWeight(5);
    fill(0, 0, 255);
    ellipse(avatarX,avatarY,avatarSize,avatarSize);
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }
  // When pressing the up arrow, the avatar is
  // yellow with a red outline
  if(keyIsDown(UP_ARROW)){
    stroke(255, 0, 0);
    strokeWeight(5);
    fill(255, 255, 0);
    ellipse(avatarX,avatarY,avatarSize,avatarSize);
  }
  // When pressing the down arrow, the avatar is
  // red with a yellow outline
  else if (keyIsDown(DOWN_ARROW)){
    stroke(255, 255, 0);
    strokeWeight(5);
    fill(255, 0, 0);
    ellipse(avatarX,avatarY,avatarSize,avatarSize);
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // When the enemy oval leaves the canvas, the speed and size increases
  if (enemyX > width){
    enemySpeed=enemySpeed+0.3;
    enemyW = enemyW +2
    enemyh = enemyH +20
}
  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemyH/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset enemy's speed
    enemySpeed = 5
    // Reset enemy's size
    enemyW = 50
    enemyH = 30
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    // Reset enemy's speed
    enemySpeed = 5
    // Reset enemy's size
    enemyW = 50
    enemyH = 30
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
  }
  // Display the number of successful dodges in the console
  console.log(dodges);
  // In the background, these "bubbles" will increase in size
  // in a loop

  // Bubbles increase in size
  bubbleSize +=1

  // Blue bubbles
  // Bubble 1
  stroke(172, 250, 240)
  strokeWeight(3)
  noFill()
  bubbleX = 100
  bubbleY = 100
  ellipse(bubbleX,bubbleY,bubbleSize)
  // Bubble 2
  stroke(172, 250, 240)
  strokeWeight(3)
  noFill()
  bubbleX = 360
  bubbleY = 240
  ellipse(bubbleX,bubbleY,bubbleSize)
  // Bubble 3
  stroke(172, 250, 240)
  strokeWeight(3)
  noFill()
  bubbleX = 50
  bubbleY = 400
  ellipse(bubbleX,bubbleY,bubbleSize)

  // Purple bubbles
  // Bubble 4
  stroke(240, 172, 250)
  strokeWeight(3)
  noFill()
  bubbleX = 250
  bubbleY = 50
  ellipse(bubbleX,bubbleY,bubbleSize)
  // Bubble 5
  stroke(240, 172, 250)
  strokeWeight(3)
  noFill()
  bubbleX = 120
  bubbleY = 250
  ellipse(bubbleX,bubbleY,bubbleSize)
  // Bubble 6
  stroke(240, 172, 250)
  strokeWeight(3)
  noFill()
  bubbleX = 400
  bubbleY = 400
  ellipse(bubbleX,bubbleY,bubbleSize)

// Loop of the bubbles
if (bubbleSize > 450){
  bubbleSize= 50;
}

  // The player is orange with a red stroke
  noStroke(255, 0, 51);
  //strokeWeight(5);
  //fill(255, 153, 0);
  // Draw the player as a circle
  ellipse(avatarX,avatarY,avatarSize,avatarSize);

  noStroke()
  // The enemy is dark red
  fill(184, 46, 46);
  // Draw the enemy as an oval
  ellipse(enemyX,enemyY,enemyW,enemyH);

  // A score keeper at the top-left of the canvas
  // It's a dark salmon color
  fill(209,73,73);
  // Position,size and font
  textAlign(RIGHT,TOP);
  textSize(130);
  textFont("Forte");
  text(dodges,width* 9/10, height/42);
}
