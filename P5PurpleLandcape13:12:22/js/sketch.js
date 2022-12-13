var x, y, d, speed;

function setup() {
    var canvas = createCanvas(1200, 1000);
    canvas.parent("p5container");

    pSlider = createSlider(-150, 320, -150); //200 850 0
    pSlider.position(20, 400);
    pSlider.style('width', '300px');

    x = width/2;
    y = height/2;
    d = 200;
    speed = .4;

}

function draw() {

const p = pSlider.value();
var shade = pSlider.value();

    noStroke();

  //sky

    fill(shade)
    ellipse(600, 500, 1700)
    rect()

    fill(63,13,115,105); //RGB Values + Tint - Red, Green, Blue, Alpha (Tint)
   ellipse(600, 500, 1700)

      //Various Purple Scenic Details

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

    //Fox Test 4

    fill(83,13,115,125); 
    ellipse(600, 700, 100)
    ellipse(540, p/8+680, 50) //This allows the head to move in time with the slider, yet not at the same rate as the lightbulb

//Experimental Clouds

x = x + speed;

if (x > height + d/2)
x = 0 - d/2

ellipse(x, 150, 50);

   //Lightbulb Appearance 

    fill('#616161') //Wire
    rect(585, p-380, 30, 200);
 
 fill('#F7FFA0') //Bulb
   ellipse(600, p, 250)
   square(525, p-130, 150, 20);

   fill('#D7D7D7') //Casing
   square(525, p-260, 150, 20);

   fill('#C6C6C6') // Casing Details
   rect(525, p-140, 150, 10);
   rect(525, p-160, 150, 10);
   rect(525, p-180, 150, 10);
   rect(525, p-200, 150, 10);

   fill('#FAFFC2') //Filament 
   rect(550, p-110, 10, 90);
   rect(640, p-110, 10, 90);
   square(550, p-50, 100, 20);


}