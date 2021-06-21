export default class InputHandler{
    constructor(car, changeTrack){
        document.addEventListener("keydown", e => {
            switch(e.key){
                case "ArrowUp":
                    car.accelerate();
                    break;
                case "ArrowDown":
                    if(car.vel > 0){car.break();}
                    else{car.reverse();}
                    break;
                case "ArrowRight":
                    car.turn(0.0004);
                    break;
                case "ArrowLeft":
                    car.turn(-0.0004);
                    break;
                case " ":
                    console.log("test");
                    changeTrack(1);
            }  
            
        });
       
        document.addEventListener("keyup", e => {
            switch(e.key){
                case "ArrowUp":
                    car.acc = 0;
                    break;
                case "ArrowDown":
                    car.acc = 0;
                    //works for now but you can't coast after breaking
                    car.vel = 0;
                    break;
                case "ArrowRight":
                    //angle = 0 may not be right, but I think rotate() goes off of current postition and not 0
                    car.angle= 0;
                    break;
                case "ArrowLeft":
                    car.angle= 0;
                    break;
            }
        });
    }
}