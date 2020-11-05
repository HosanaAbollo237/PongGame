class Paddle{

    constructor(x){
        this.x = x;
        this.y = height / 2;
        this.height = 70;
        this.width = 10;
    }
    
    display(){
        fill(255)
        rect(this.x, this.y, this.width, this.height)
    }
}