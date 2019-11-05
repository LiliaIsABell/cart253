// Powerup
//
// A class that represents an object that will
// allow the predator to accelarate when consumming
// this object.

class Powerup {

  // The power up has a constructor that determines it's
  // Position, speed, color, radius and image
  constructor(x, y, speed, radius, color, stroke, strokeWeight) {
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
    this.strokeWeight = strokeWeight;
  }


  move() {

    this.x = width*noise(this.tx);
    this.y = height*noise(this.ty);

    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;

  }

  handleAbsorb(predator,prey) {
    let d = dist(this.x, this.y, predator.x, predator.y);

    if (d < this.radius + predator.radius) {
      predator.speed = predator.speed + 2;

  }
  else if (prey.health === 0){
    predator.speed = predator.speed;
  }

}


  // 
  // reset() {
  //
  //
  //
  //
  //
  //
  // }


  display() {
    // Appearance of the power up
    push();
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    fill(this.fillColor);
    ellipse(this.x, this.y, this.radius*2);
    pop();


  }


}
