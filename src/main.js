import Car from "./car.js"
console.log(1);

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

function clear(){
    ctx.clearRect(0, 0, 1900, 860);
}

clear();
ctx.fillStyle = "#f00";
ctx.fillRect(400, 400, 40, 80);

let car = new Car();
car.draw(ctx);


//body is commented out
function keyPressed(){
    /*
    switch(keyCode){
        case UP_ARROW:
            car.acc = 1;
            break;
        case DOWN_ARROW:
                car.acc = -1;
                break;
        case RIGHT_ARROW:
                car.turn(0.1);
                break;
        case LEFT_ARROW:
                    car.turn(-0.1);
                    break;
        
    }
    */
}
