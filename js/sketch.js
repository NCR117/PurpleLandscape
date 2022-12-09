
function setup() {
    var canvas = createCanvas(1200, 1000);
    canvas.parent("p5container");

    shadeSlider = createSlider(0, 250, 0); 
    shadeSlider.position(20, 200);
    shadeSlider.style('width', '50');

    xSlider = createSlider(-150, 320, 0); //200 850 0
    xSlider.position(20, 400);
    xSlider.style('width', '50');


}

function draw() {

const x = xSlider.value();
var shade = shadeSlider.value();




    background(150);

    noStroke();

  

    fill(shade)
    ellipse(600, 500, 1700)

    fill(63,13,115,105); //RGB Values + Tint - Red, Green, Blue, Alpha (Tint)
    ellipse(600, 500, 1700)

    fill(83,13,115,125); 
    ellipse(100, 1200, 1200)
    ellipse(1000, 1200, 1500)

    rect(70, 800, 190, 90)
    triangle(40, 800, 160, 700, 290, 800);
    triangle(40, 800, 160, 700, 290, 800);
    triangle(40, 800, 160, 700, 290, 800);
    rect(80, 700, 30, 90)
    rect(100, 820, 30, 70)
    rect(100, 820, 30, 70)
    rect(160, 820, 70, 40)


   //Lightbulb Appearance 

    fill('#616161') //Wire
    rect(585, x-380, 30, 200);
 
 fill('#F7FFA0') //Bulb
   ellipse(600, x, 250)
   square(525, x-130, 150, 20);

   fill('#D7D7D7') //Casing
   square(525, x-260, 150, 20);

   fill('#C6C6C6') // Casing Details
   rect(525, x-140, 150, 10);
   rect(525, x-160, 150, 10);
   rect(525, x-180, 150, 10);
   rect(525, x-200, 150, 10);

   fill('#FAFFC2') //Filament 
   rect(550, x-110, 10, 90);
   rect(640, x-110, 10, 90);
   square(550, x-50, 100, 20);


}