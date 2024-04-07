/*
 Project 2 - Array of Objects
 Name: Darcy Noonan
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/
// Global Variables go here
var sprites = new Array(10); // sets array parameters
var sprite1, sprite2; // makes 2 sprites


function setup(){ //setup fires ONE time. Draw is 60/sec.
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  sprite1 = new Sprite (100, 100);
  sprite2 = new Sprite (100, 200);

for (let i = 0; i < sprites.length; i++){ // standard for loop. Initializes I; checks if I is length is less; each forloop time it increases. 
  sprites [i] = new Sprite(random(width), random(height)); 
  console.log (sprites[i]); // communicates what happens in the program. Check output. 
}
}
function draw(){
  background(200); //light gray background
 sprite1.display ()
 sprite1.move ()
 sprite2.display ()
 sprite2.move ()
 for (let i = 0; i < sprites.length; i++){ // I starts at 0, increments by 1 until Array Length (10). Then loop ends
  sprites[i].display();
  sprites[i].move (); 
 }
}


