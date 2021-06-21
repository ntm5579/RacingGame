import Car from "./car.js";
import InputHandler from "./input.js";
//about import from this project https://stackoverflow.com/questions/52919331/access-to-script-at-from-origin-null-has-been-blocked-by-cors-policy

//canvas setup
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";
ctx.strokeStyle = "#F00";

const GAMEWIDTH = 1850;
const GAMEHEIGHT = 800;
//function to clear the whole screen
//needs to be updated to clear the whole canvas when boundaries are working
function clearScreen(){
    ctx.clearRect(0, 0, GAMEWIDTH, GAMEHEIGHT);
}
clearScreen();

//initializes img with the ferarri sprite
let img = document.getElementById("myImage");

//info for the teampicker if I need it. teamNames **not currently in use**
let teamNames = ["Mercedes", "Red Bull", "Ferrari", "Maclaren", "Alpha Tauri", "Aston Martin", "Alpune", "Alfa Romeo", "Haas", "Williams"];
let teamCodes = ["Merc", "Rb", "Fer", "Mac", "Tar", "AsMt", "Alp", "Rom", "Has", "Wil"];

function chooseTeam(i){
    //console.log("assets/CarSprites/F1Car" + teamCodes[i] + ".png");
    document.getElementById("myImage").src = "assets/CarSprites/F1Car" + teamCodes[i] + ".png";
}
//placeholder until teampicker is made
//chooseTeam(0);

//track picker
var currentTrack = 0;
function changeTrack(trackNumber){
    if(!trackNumber){trackNumber = currentTrack++;}
    document.getElementById("gameDiv").style.backgroundImage = "assets/Tracks/Track" + trackNumber + ".png";
}


//may not be using this anymore https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations
//https://www.createjs.com/docs/easeljs/modules/EaselJS.html
//https://www.youtube.com/watch?v=-zhij_uRVxg

//init car
let car = new Car(950, 350, GAMEWIDTH, GAMEHEIGHT);

//init InputHandler
new InputHandler(car, changeTrack);

//start of gameloop, this calls many methods in car and inputhandler to get the car moving.
let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    clearScreen();
    car.update(deltaTime);
    car.draw(ctx, img);
    requestAnimationFrame(gameLoop);
    document.getElementById("dash").innerHTML = "x= "+ car.position.x.toFixed(2) +", y= "+ car.position.y.toFixed(2) +", vel= " + car.vel.toFixed(2) +", acc= " + car.acc + ", angle= " + 
    ((car.angle * Math.PI)/180).toFixed(5) + ", deltaTime= " + deltaTime.toFixed(2);    
}
gameLoop();

