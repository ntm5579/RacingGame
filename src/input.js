export default class InputHandler{
    constructor(){
        document.addEventListnener("keydown", event => {
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
        });     
    }
}