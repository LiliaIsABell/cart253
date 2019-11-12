// Prey
//
class Prey {

  // Constructor
  //
  constructor(x, y, radius, bodyColor, strokeColor) {
    // Position
    this.x = x;
    this.y = y;
    // Health
    this.health = this.radius;
    // Display properties
    this.radius = radius;
    // Colors
    this.bodyColor = bodyColor;
    this.strokeColor = strokeColor;
    // Timer (Used for moving the prey)
    this.startTime = millis();
    this.timePast = 0;
    this.timeInterval = 5000;
  }

  // Move
  //
  move() {
    // The prey's timer will start when the prey is displayed
    this.timePast = millis() - this.startTime;
    // After an interval of time
    // the prey's position will reset
    if (this.timePast > this.timeInterval) {
      this.x = random(0, width);
      this.y = random(0, height);
      // This allows the timer to reset
      this.startTime = millis();
      this.timePast = 0;
    }
  }

  reset(){
    // The prey will reset at a random position
    this.x = random(0,width);
    this.y = random(0,height);
    // health will return to normal
    this.health = this.radius;
  }

  // Display
  //
  display() {

    push();
    fill(this.bodyColor);
    stroke(this.strokeColor);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }

}
