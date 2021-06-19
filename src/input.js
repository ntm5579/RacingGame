//idk if this is even necessary, most of this was just in a function in main.js originally, it never worked there, but nothing did bc of the import
export default class InputHandler{
    constructor(car){
        //gets intialized, but can't get anything out of the switch statement.
        document.addEventListener("keydown", e => {
            switch(e.key){
                case "ArrowUp":
                    //up
                    car.gas();
                    break;
                case "ArrowDown":
                    //down
                    car.break();
                    break;
                case "ArrowRight":
                    //right
                    car.turn(0.1);
                    break;
                case "ArrowLeft":
                    //left
                    car.turn(-0.1);
                    break;
            }  
            
        });
       
        document.addEventListener("keyup", e => {
            switch(e.key){
                case "ArrowUp":
                    //up
                    car.acc = 0;
                    break;
                case "ArrowDown":
                    //down
                    car.acc = 0;
                    break;
            }
        });
    }
}