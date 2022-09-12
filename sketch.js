var canvas;
var h1;
var paragraph;
var x = 100;
var y = 100;
var bgColor;
var button;

function setup() {
    canvas = createCanvas (200,200);
    canvas.position(width*0.5,height/2);
    h1 = createElement('h1', 'My favorite numbers below');
    bgColor = color(200);
    button = createButton("Change Color Canvas");
    button.mousePressed(changeColor);
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
    fill(255,0,0);
    h1.position(300,0);
    rect(x, 100, 50, 50);
    x = x + random(-3, 3);
    button.position(100,300);
}