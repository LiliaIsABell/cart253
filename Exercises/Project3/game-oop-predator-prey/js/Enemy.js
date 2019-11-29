// Enemy
//
class Enemy {

  // Constructor
  //
  constructor(x, y, speed, radius, image) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = speed;
    // Display
    this.radius = radius;
    this.image = image;
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
    // Calculate distance
    let d = dist(this.x, this.y, predator.x, predator.y);
    // If the predator overlaps with the prey,
    if (d < (this.radius / 2 + predator.radius / 2)) {
      // the touchedByEnemy variable will decrease,
      predator.touchedByEnemy--;
      // the predator will reset
      predator.reset();
      // if the predator touches the enemy 3 times
      // making touchedByEnemy reach 0
      // the game will end
      if (predator.touchedByEnemy < 0) {
        gameOver = true;
      }
    }
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

  // Game Over Reset
  //
  gameOverReset(predator) {
    // When the game reset's, all
    // of these properties will reset
    //
    //Position
    this.x = -500;
    this.y = random(0, height);
    // Velocity and speed
    this.vx = 5;
    // Size
    this.radius = 300;
    // Predator's chances
    predator.touchedByEnemy = 2;
  }


  // Display
  display() {

    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.radius, this.radius);
    pop();

  }


}
