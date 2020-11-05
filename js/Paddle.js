class Paddle{
    // Constructor
    constructor(x){
        this.x = x;
        this.y = height / 2;
        this.height = 80;
        this.width = 20;
    }
    
    // Permet d'afficher le paddle 
    display(){
        fill(255)
        rect(this.x, this.y, this.width, this.height)
    }

    // Aim to move up and down
    up(){
        this.y -= 2
    }

    down(){
        this.y += 2
    }

    
}