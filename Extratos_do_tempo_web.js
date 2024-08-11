var x = 1;
var s;
var m;
var h;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  s = second ();
  m = minute ();
  h = hour ();
  background(255);
  while (x < 50) {
    strokeWeight (random (1, 10)) ;
    line (random (1, 1920) + s, random (1, 1080) + h, random (1, 1920) + s, random (1, 1080) / m) ;
    x = x + 1 ;
  }
}
