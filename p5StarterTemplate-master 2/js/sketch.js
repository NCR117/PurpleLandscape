var redSun

function setup() {
    var canvas = createCanvas(1000, 800);
    canvas.parent("p5container");

    slider = createSlider(0, 255, 100);
  slider.position(130, 1050);
  slider.style('width', '1100px');

  redSun = slider.value()

}

function draw() {
    background('#8B80F9');

    noStroke();

    fill('#FF0000')
    ellipse(redSun, 150, 180)

    fill('#7000FF');  
    ellipse(0, 800, 700);
    ellipse(800, 800, 800);
    ellipse(400, 800, 550);
}