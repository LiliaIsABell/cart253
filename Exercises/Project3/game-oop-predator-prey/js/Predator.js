// Predator
//
class Predator {

  // Constructor
  //
  constructor(x, y, speed, radius, bodyColor) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and Speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Display
    this.radius = radius;
    this.bodyColor = bodyColor;
    // Input properties
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;

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
  handleEating(prey) {
    // Calculate distance
    let d = dist(this.x, this.y, prey.x, prey.y);
    // If the predator overlaps with the prey,
    // it's speed will increase
    if (d < this.radius + prey.radius) {
      this.speed += 1;
    }

  }

  // Display
  //
  display() {

    push();
    fill(this.bodyColor);
    ellipse(this.x, this.y, this.radius, this.radius);
    pop();

  }
}
