import Car from "./car.js";
import InputHandler from "./input.js";
//about import from this project https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy

//canvas setup
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";

const GAMEWIDTH = 1850;
const GAMEHEIGHT = 800;
//
function clearScreen(){
    ctx.clearRect(0, 0, GAMEWIDTH, GAMEHEIGHT);
}

clearScreen();

let img = document.getElementById("myImage");

//info for the teampicker if I need it. teamNames not currently in use
let teamNames = ["Mercedes", "Red Bull", "Ferrari", "Maclaren", "Alpha Tauri", "Aston Martin", "Alpune", "Alfa Romeo", "Haas", "Williams"];
let teamCodes = ["Merc", "Rb", "Fer", "Mac", "Tar", "AsMt", "Alp", "Rom", "Has", "Wil"];

function chooseTeam(i){
    console.log("assets/F1Car" + teamCodes[i] + ".png");
    document.getElementById("myImage").src = "assets/F1Car" + teamCodes[i] + ".png";
}
//placeholder until teampicker is made
//chooseTeam(0);

//https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations


let car = new Car(1000,10, GAMEWIDTH, GAMEHEIGHT);

//may be causing issues, was not set to a variable in tutorial.
new InputHandler(car);


let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    clearScreen();
    car.update(deltaTime);
    car.drawImageRot(ctx, img);
    requestAnimationFrame(gameLoop);
    document.getElementById("dash").innerHTML = "x= "+ car.position.x.toFixed(2) +", y= "+ car.position.y.toFixed(2) +", vel= " + car.vel.toFixed(2) +", acc= " + car.acc + ", angle= " + 
    ((car.angle * Math.PI)/180).toFixed(5) + ", deltaTime= " + deltaTime.toFixed(2);    
}
gameLoop();

