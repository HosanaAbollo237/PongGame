class Paddle{

    // Constructor
    constructor(x){
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 20;

        // Movement tracker
        this.isUp = false
        this.isDown = false
    }
    
    // Permet d'afficher le paddle 
    display(){
        fill(255)
        rect(this.x, this.y, this.width, this.height)
    }

    // Permet le déplacement des paddle
    up(){
        this.y -= 2
    }

    down(){
        this.y += 2
    }
}