export default class Car {
    //constructor that creates car at x,y
    constructor(x, y, GAMEWIDTH, GAMEHEIGHT){
        this.width = 149;
        this.height = 77;
        this.vel = 0;
        this.acc = 0;
        this.topSpeed = 50;
        this.angle = 0;
        this.position = {
            x: x,
            y: y
        };
        this.gameWidth = GAMEWIDTH;
        this.gameHeight = GAMEHEIGHT;
        this.border = {
            rightx: this.gameWidth,
            leftx: 0,
            topy: 0,
            bottomy: this.gameHeight
        }
    }

    //movement methods triggered by inputHandler switch statement.
    accelerate(){
        if (this.vel > this.topSpeed){
            this.acc= 0;
            this.vel = 50;
        }
        else{this.acc= 1;}
    }

    break(){
    }

    reverse(){
        this.acc = -0.3;
    }
    //turning ramps up after a certain angle and goes way too aggressive, may have to do with input
    turn(theta){
        this.angle += theta;
        document.querySelector("#imgCompass").style.transform = "rotate(" + (this.angle * Math.PI)/180 + "deg)";
        //add something here to rotate the car to angle
        //img.rotate(angle)
    }

    //methods that draw and updates the variables, taken from internet
    //https://stackoverflow.com/questions/2677671/how-do-i-rotate-a-single-object-on-an-html-5-canvas
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

    //this is the math I need to figure out
    coordCalc(){
        this.border.leftx = this.position.x * Math.tan(this.angle);
        this.border.rightx = (this.position.x + this.gameWidth) * Math.tan(this.angle);
        this.border.topy = this.position.y * Math.tan(this.angle);
        this.border.bottomy = (this.position.y + this.gameHeight) * Math.tan(this.angle);
    }
    
    drawBoundry(ctx){
        ctx.strokeStyle = "#00F";
        this.coordCalc();
        ctx.strokeRect(this.border.leftx, this.border.rightx, this.border.topy, this.border.bottomy);
    }

    //not in use right now, has problems with borders after turns because it turns the whole canvas
    draw(ctx, img){
        this.drawCustomSize(ctx, img, this.width, this.height);
    }
    
    drawCustomSize(ctx, img, width, height){
        ctx.translate(this.position.x + 75, this.position.y + 39);
        //ctx.strokeRect(0,0, this.gameWidth, this.gameHeight);
        ctx.rotate((this.angle/Math.PI) * 180);

        ctx.translate(-this.position.x - 75, -this.position.y - 39);
        //using this to visualize a way to check borders
        ctx.strokeStyle = "#F00";
        ctx.strokeRect(1,1, this.gameWidth - 1, this.gameHeight - 1);
        this.drawBoundry(ctx);
        ctx.drawImage(img, this.position.x, this.position.y, width, height);
    }

    //called by gameloop to update 
    update(dT){
        //error proc when there is no frametime
        if(!dT) return;
        
        this.vel += this.acc;
        
        //causes the car to slow down when a button is not pressed. might causes slowdown after pressing button for long, but shouldn't be an issue with how small the screen is.
        if(this.acc == 0 && this.vel > 0){
            this.vel -= 0.1;
        }
        else if(this.acc == 0 && this.vel < 0){
            this.vel += 0.1;
        }

        //moves the car based on velocity, frametime and angle, does not actually rotate sprite.
        this.position.x += Math.cos(this.angle) * this.vel/dT;
        this.position.y += Math.sin(this.angle) * this.vel/dT;

        /*
        //boundry checks, not working right now
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
        */
    }
}