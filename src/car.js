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
        this.acc= 1;
    }

    break(){
        this.acc= -0.75;
    }

    turn(theta){
        this.angle += theta;
        document.querySelector("#imgCompass").style.transform = "rotate(" + (this.angle * 180)/Math.PI + "deg)";
        //add something here to rotate the car to angle
        //img.rotate(angle)
    }

    //methods that draw and updates the variables, taken from internet
    drawImageRot(ctx,img){
        // Store the current context state (i.e. rotation, translation etc..)
        ctx.save()
    
        //Convert degrees to radian 
        var rad = this.angle * Math.PI / 180;
    
        //Set the origin to the center of the image
        ctx.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
    
        //Rotate the canvas around the origin
        ctx.rotate(rad);
    
        //draw the image    
        ctx.drawImage(img, this.width / 2 * (-1), this.height / 2 * (-1), this.width, this.height);
    
        // Restore canvas state as saved from above
        ctx.restore();
    }
    
    //not in use right now, has problems with borders after turns because it turns the whole canvas
    draw(ctx, img){
        this.drawCustomSize(ctx, img, this.width, this.height);
    }
    
    drawCustomSize(ctx, img, width, height){
        ctx.translate(this.position.x + 75, this.position.y + 39);
        ctx.strokeRect(0,0, this.gameWidth, this.gameHeight);
        ctx.rotate((this.angle/Math.PI) * 180);

        ctx.translate(-this.position.x - 75, -this.position.y - 39);
        ctx.strokeRect(0,0, this.gameWidth, this.gameHeight);
        ctx.drawImage(img, this.position.x, this.position.y, width, height);
    }

    //called by gameloop to update 
    update(dT){
        if(!dT) return;
        
        this.vel += this.acc;
        
        if(this.acc == 0 && this.vel > 0){
            this.vel -= 0.1;
        }
        else if(this.acc == 0 && this.vel < 0){
            this.vel += 0.1;
        }
        this.position.x += Math.cos(this.angle) * this.vel/dT;
        this.position.y += Math.sin(this.angle) * this.vel/dT;

        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width - 1;
            this.vel = 0;
            this.acc = 0;
        }
        else if(this.position.x < 0){
            this.position.x = 1;
            this.vel = 0;
            this.acc = 0;
        }
        if(this.position.y + this.height>this.gameHeight){
            this.position.y = this.gameHeight - this.height - 1;
            this.vel = 0;
            this.acc = 0;
        }
        else if(this.position.y < 0){
            this.position.y = 1;
            this.vel = 0;
            this.acc = 0;
        }
    }
}