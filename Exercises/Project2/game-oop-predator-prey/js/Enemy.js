// Enemy
//
// A class that represents an enemy that will move
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects but
// if the Predator touches it, game over.

class Enemy {

  // The enemy has a constructor that determines it's
  // Position, speed, color, radius and image
  constructor(x, y, speed, radius, image) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and it's speed
    this.vy = speed;
    // Radius and image
    this.radius = radius;
    this.image = image;
  }


  move() {

    // The enemy will only move verticaly from top to bottom
    this.y = this.y + this.vy;

  }

  handleGameOver(predator){

    let d = dist(this.x, this.y, predator.x, predator.y);

    if (d < (this.radius/2 + predator.radius/2)) {

      gameOver = true;
    }





  }

  // The reset function updates the position of
  // the enemies this.x
  reset() {
    // If the enemy leaves exits from the bottom of the window,
    // then it will be brought back to the top in a random position
    if (this.y > height) {
      this.x = random(0, width);
      this.y = 0;
    }
  }

  // Display of the enemy
  display() {

    image(this.image, this.x, this.y, this.radius * 2, this.radius * 2)

  }


}
