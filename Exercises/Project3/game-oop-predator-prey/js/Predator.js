// Predator
//
class Predator {

  // Constructor
  //
  constructor(radius, bodyColor, eatSound, hitSound) {
    // Position
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    // Velocity and Speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    // Display
    this.radius = radius;
    this.bodyColor = bodyColor;
    // Input properties
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
    // Score Keeper
    this.preyEaten = 0;
    // Variable for the eating sound
    this.eatSound = eatSound;
    // Variable for the hit sound
    this.hitSound = hitSound
    // Variable that determines if
    // the predator touched the enemy
    this.touchedByEnemy = 2;
  }

  // Handle Input
  //
  handleInput() {
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
  }

  // Move
  //
  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    this.handleBorder();
  }
  // Handle border
  handleBorder() {
    // When the player reaches the borders of the screen,
    // they will stay in the screen
    // Off the left or right
    if (this.x <= this.radius / 2) {
      this.x = this.radius / 2;
    } else if (this.x >= width - this.radius / 2) {
      this.x = width - this.radius / 2;
    }
    // Off the top or bottom
    if (this.y <= this.radius / 2) {
      this.y = this.radius / 2;
    } else if (this.y >= height - this.radius / 2) {
      this.y = height - this.radius / 2;
    }
  }

  // Handle Eating
  //
  handleScore(prey) {
    // Calculate distance
    let d = dist(this.x, this.y, prey.x, prey.y);
    // If the predator overlaps with the prey,
    if (d < this.radius / 2 + prey.radius / 2) {
      // the predator collects a point
      this.preyEaten += 1;
      // and it's speed will increase
      this.speed += 0.25;
      // prey will reset
      prey.reset();
      // eatenSound will play
      this.eatSound.play();
    }
  }
  // Reset
  //
  reset() {
    // the predator's position and speed will
    // reset when touching the enemy
    this.x = windowWidth
    this.y = windowHeight / 2;
    this.speed = 5;
    // and a sound will play
    this.hitSound.play();
    //
    // this.hitSound.setVolume(20,10);
    // 
  }
  // Game Over Reset
  //
  gameOverReset() {
    // When the game reset's, all
    // of these properties will reset
    //
    //Position
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    // Velocity and Speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
  }

  // Display
  //
  display() {

    push();
    noStroke();
    fill(this.bodyColor);
    ellipse(this.x, this.y, this.radius, this.radius);
    pop();

  }
}
