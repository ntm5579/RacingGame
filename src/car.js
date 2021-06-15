class Car {
    //default constructor that creates car at 200, 200
    constructor(x, y){
        this.width = 40;
        this.height = 80;
        this.vel = createVector(0,0);
        this.angle = 0;
        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx){
        ctx.fillStyle = "#00f";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    drawTriangle(ctx){
        ctx.fillStyle = "#00f";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + (this.width /2), this.y + (this.width /2));
        ctx.lineTo(this.x + (this.width /2), this.y - (this.width /2));
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
    }

    move(){
        this.y += this.vel;
        this.y += this.vel;
    }

    turn(theta){
        this.angle += theta;
    }
}
module.exports = class Car {}