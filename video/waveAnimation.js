var wave_amount;

var pageWidth = window.innerWidth;                
if (pageWidth > 1024) {
	wave_amount = 300;
}else{
	wave_amount = 100;
}

function setup () {
   let size = min(windowWidth, windowHeight) * 0.96;
   size = floor(size);
   var canvas = createCanvas(windowWidth, ((windowHeight/100)*20));
   canvas.parent('waves');
   noiseSeed(random(100));
   mouseY = height / 2;
   noFill();              
}

function windowResized () {
	let size = min(windowWidth, windowHeight) * 0.96;
  size = floor(size);
  resizeCanvas(windowWidth, ((windowHeight/100)*20));
  noiseSeed(random(100));
  draw();
}

function draw () {
	clear();
  beginShape();
  const _o = millis() * 0.001;
         
  const amount = max(1, (wave_amount / windowWidth) * 90);
  const ampl = height * 0.09;
            
  for(var k=0;k<amount;k++) {
  	beginShape();
    const offset = (1 - k/amount) * 3;
    const detail = max(1, 0 / windowWidth * 150);
    for(var i=0;i<(width+detail);i+=detail) {
    	let y = height * 0.5;
      y += sin(i * 0.007 - _o + offset) * ampl;
      y += sin(i * 0.001 - _o + offset) * ampl;
      y += sin(i * 0.0005 - _o + 10 + offset + noise(_o * 0.1 + (i/width) * 1) * 10) * ampl;
      vertex(i, y);
    }

    //strokeStyle(50,56,84);
    stroke(73, 30, 184, (k/(amount - 2) * 255) );
    endShape();
	}
}
