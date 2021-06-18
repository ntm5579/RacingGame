import Car from "./car.js";
//about import from this project https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy
//og tutorial https://www.youtube.com/watch?v=3EMxBkqC4z0&t=597s

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

function clear(){
    ctx.clearRect(0, 0, 1900, 860);
}

clear();

//https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations
//let img = document.getElementById("myImage");

//uncomment when import car works without error
var car = new Car();
car.draw(ctx);
