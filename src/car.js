export default class Car {
    //default constructor that creates car at x,y
    constructor(x, y, GAMEWIDTH, GAMEHEIGHT){
        this.width = 149;
        this.height = 77;
        this.vel = 0;
        this.acc = 0;
        this.angle = 0;
        this.position = {
            x: x,
            y: y
        };
        this.gameWidth = GAMEWIDTH;
        this.gameHeight = GAMEHEIGHT;
    }

    //movement methods triggered by inputHandler switch statement.
    gas(){
        /*
        switch(this.vel,this.acc){
            case 5, 5:
                this.acc= 1;
        }*/
        this.acc= 1;
    }

    break(){
        /*
        switch(this.vel,this.acc){
            case 5, 5:
                this.acc= 1;
        }*/
        this.acc= -1;
    }

    turn(theta){
        this.angle += theta;
        //img.rotate(angle)
        //add something here to rotate the car to angle
    }
    
    draw(ctx, img){
        ctx.drawImage(img, this.position.x, this.position.y, this.width, this.height);
    }
    
    drawCustomSize(ctx, img, width, height){
        ctx.drawImage(img, this.position.x, this.position.y, width, height);
    }

    update(dT){
        if(!dT) return;
        this.vel += this.acc
        this.position.x += this.vel/dT;
        //this.position.y += (this.vel + this.acc)/dT;

        if(this.position.x + this.width>this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
        if(this.position.y + this.height>this.gameHeight){
            this.position.y = this.gameHeight - this.height;
        }
    }
}