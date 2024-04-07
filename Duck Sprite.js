/*** 
 * Code for class constructor in this file
 */

function Sprite (tempX, tempY){ // gives temp position of Sprite
    this.x = tempX; // X position
    this.y = tempY; // Y position
    this.xSpeed = random (-2, 2); // speed of X randomized
    this.ySpeed = random (-2, 2); // spped of Y randomized
    
    this.move = function (){ // allows it to move. Makes it a method
    this.x += this.xSpeed;  // increases X speed. Incriments X property by XSpeed (randomized -2 to 2)
    this.y += this.ySpeed; // increases Y speed 

    if(this.x > width || this.x < 0){  
      this.xSpeed *= -1; // flip sign to keep on canvas
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1; // flip sign to keep on canvas
    }
    }
    
    this.display = function () {
      push (); // open drawing layer
      translate(this.x, this.y); // sprite code
    
      fill ("orange") // Bill color
      rect (0 - 161, 0 - 58, 50, 20)// beak
      fill ("yellow") // Duck color
      triangle (0 + 120, 0, 0 + 75, 0 + 30, 0 + 90, -10) // tail
      ellipse (0, 0, 190, 100)// duck body
      ellipse (0 - 78, 0 - 55, 120, 70)// duck head
      fill (0, 0, 0)// black for the eye
      ellipse (0 - 107, 0 - 58, 15) // eye

      pop (); // end drawing layer
    }
    }