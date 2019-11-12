// Enemy
//
class Enemy {

  // Constructor
  //
  constructor(x, y, speed, bodyColor, strokeColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = speed;
    // Display
    this.bodyColor = bodyColor
    this.strokeColor = strokeColor
    this.radius = radius
  }

  // Move
  //
  move() {
    // Moves left to right
    this.x = this.x + this.vx;

  }
  // Handle Game Over
  //
  handleGameOver(predator) {

  }


  // Reset
  //
  reset() {

  }

  // Display
  display() {

    push();
    fill(this.bodyColor);
    stroke(this.strokeColor);
    ellipse(this.x, this.y, this.radius, this.radius);
    pop();

  }


}
