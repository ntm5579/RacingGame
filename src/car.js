export default class Car {
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

    //draw...() methods are not used as of now, moved to sprites
    draw(ctx){
        ctx.fillStyle = "#00f";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    move(){
        this.y += this.vel;
        this.y += this.vel;
    }

    turn(theta){
        this.angle += theta;
    }
}
//module.exports = class Car {}