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
  move(points) {
    // When the predator collects over 5 points,
    // the enemy will start moving
    if (points > 5) {
      // Moves left to right
      this.x = this.x + this.vx;
    }
  }
  // Handle Game Over
  //
  handleGameOver(predator) {

  }


  // Reset
  //
  reset(points) {
    // Varible for when the enemy is out of bounds
    let outOfBounds = this.x < 0 || this.x > width;
    // If the score is divisible by 5,
    // a new enemy will appear
    if (points % 5 === 0 && points > 5 && outOfBounds) {
      this.x = 0;
      this.y = random(0, height);
      // and each one will come out bigger in radius than the other
      this.radius += 10;

    }
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
