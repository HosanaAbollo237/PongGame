// Création du canvas
function setup(){
    createCanvas(624, 351)
    playerPaddle = new Paddle(15)
}

// Remplissage de couleur du canvas
function draw(){
    background(0)
    playerPaddle.display()
}

