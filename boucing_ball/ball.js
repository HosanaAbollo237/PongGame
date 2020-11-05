let x
let y

// Création du canvas
function setup(){
    createCanvas(400, 400)
    // centrer la ball par rapport au canva
    x = width / 2
    y = width / 2
}

function draw(){
    background(220) 
    fill(100, 123, 255) // color inner ball
    ellipse(x, y, 50, 50) // ball
}