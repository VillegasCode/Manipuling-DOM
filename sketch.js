var canvas;
var h1;
var paragraph;
var x = 100;
var y = 100;
var bgColor;
var slider;
var input;
var nameP;

function setup() {
    canvas = createCanvas (200,200);
    canvas.position(width*0.5,height/2);
    h1 = createElement('h1', 'My favorite numbers below');
    bgColor = color(200);
    nameP = createP('Your name!');
    button = createButton("Change Color Canvas");
    button.mousePressed(changeColor);
    nameP.position(100,60);
    slider = createSlider(10, 100, 20);
    input = createInput('Type Your Name');
}

function changeColor() {
    bgColor = color(round((random(255))));
}

function mousePressed() {
    h1.html("Now I will show you my favorite number")
    paragraph = createP("My favorite number is " + round(random(0,10)));
    paragraph.position(500,-50+y);
    y = y + 50;
}

function draw() {
    clear();
    background(bgColor);
    fill(255,0, 0);
    ellipse(100,100, slider.value(), slider.value());
    h1.position(300,0);
    rect(x, 130, 50, 50);
    x = x + random(-3, 3);
    button.position(100,300);
    slider.position(100, 330);
    input.position(100, 360);
    nameP.html(input.value());
    text('Hello ' + input.value(),10,15);
}