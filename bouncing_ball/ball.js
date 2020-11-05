let x;
let y;

let radius = 25;

let xSpeed;
let ySpeed;

// Canva creation
function setup(){
    createCanvas(400, 400)
    // Center the ball connected to canvas
    x = width / 2
    y = width / 2

    // Ball speed on x and y axis
    xSpeed = random(2, 5) 
    ySpeed = random(2, 5)
}

function draw(){
    background(220) 
    fill(100, 123, 255) // color ball
    ellipse(x, y, radius * 2, radius * 2) // ball

    x += xSpeed
    y += ySpeed

    // On inverser les direction en cas de collision
    if( x > width - radius || x < radius){
        xSpeed = -xSpeed
    }

    if( y > width - radius || y < radius){
        ySpeed = -ySpeed    
    }
}