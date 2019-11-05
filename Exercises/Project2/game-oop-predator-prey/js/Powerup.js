// Powerup
//
// A class that represents an object that will
// allow the predator to accelarate when consumming
// this object.

class Powerup {

  // The power up has a constructor that determines it's
  // Position, speed, color, radius and image
  constructor(x, y, speed, radius, color, stroke) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and it's speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Time properties for noise() function
    this.tx = random(0, 1000);
    this.ty = random(0, 1000);
    // Radius
    this.radius = radius;
    // Colors
    this.fillColor = color;
    this.strokeColor = stroke;
  }


  move() {
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;

  }





  reset() {






  }


  display() {
    // Appearance of the power up
    push();
    stroke(this.strokeColor);
    strokeWeight(20);
    fill(this.fillColor);
    ellipse(this.x, this.y, this.radius*2)
    pop();


  }


}
