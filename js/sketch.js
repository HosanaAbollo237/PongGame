// Création du canvas
function setup(){
    createCanvas(624, 351)

    // Paddles
    playerPaddle = new Paddle(15)
    aiPaddle = new Paddle(width - 37)
}

function draw(){
    background(0)
    playerPaddle.display()
    aiPaddle.display()

    // Condition de deplacement du paddle
    if(playerPaddle.isUp){
        playerPaddle.up()
    } else if(playerPaddle.isDown) {
        playerPaddle.down()
    }
}

// When a key is pressed 
function keyPressed(){
    if(keyCode == UP_ARROW){
        playerPaddle.isUp = true
    } else if(keyCode == DOWN_ARROW){
        playerPaddle.isDown = true
    }
}

// When a key is released
function keyReleased(){
    if(keyCode == UP_ARROW){
        playerPaddle.isUp = false
    } else if(keyCode == DOWN_ARROW){
        playerPaddle.isDown = false
    }
}



