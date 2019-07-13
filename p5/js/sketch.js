/*
  For using webcam input:
  http://p5js.org/reference/#/libraries/p5.dom

  For using sound:
  http://p5js.org/reference/#/libraries/p5.sound
*/

// Automatically resize our window
window.resizeTo(1080,1920);

// set global variables
let time = 0,
    amp = 150,
    size = 300,
    speed = 0.02;

function setup(){
  createCanvas( 1080, 1920 );
  noStroke(); // globally set "no stroke" as default
}

function draw(){
  background(10); // draws background color for each loop
  translate(width*0.5,height*0.5); // centers canvas

  push(); // push() ensures we are only setting color mode for this block
    colorMode(HSB, 100); // https://p5js.org/reference/#/p5/colorMode
    let hue = map(sin(time), -1, 1, 0, 100);
    fill(hue, 100, 100); // Change hue, 100% saturation, 100% brightness
    ellipse(cos(time)*amp, sin(time)*amp, size, size);
      // amp is how large our circle of movement is
  pop(); // pop() indicates end of this block

  // increase time counter each draw loop
  time+= speed;
}

/*
  Due to the limitations of the art
  display, please refrain from using
  events such as "mousePressed" or
  "keyPressed"
*/
