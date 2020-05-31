import './styles/index.scss';
import Fish from './fish';
import OtherFish from './other_fish';
import waterBackground from './images/water-background.jpg';
import fishBackground from './images/fish_background.png';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 920;
const GAME_HEIGHT = 540;


const fish = new Fish(ctx);
let otherFish = new OtherFish(ctx);
let otherFishies;
let xMouse;
let yMouse;

let mouse = document.addEventListener('mousemove', function(e){
    let rect = canvas.getBoundingClientRect();
    xMouse = (e.clientX - rect.left);
    yMouse = (e.clientY - rect.top);
});



const SAVE_KEY_SCORE = "highScore" //save key of local storage of high score

let gameState;

export function setState(state) {
    gameState = state;
}
let score = 0;
let highScore;

let scoreStr = localStorage.getItem(SAVE_KEY_SCORE);
if (scoreStr === null) {
     highScore = 0;
} else {
    highScore = parseInt(scoreStr);
}
function drawScore(score) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#a8e5e5";
    ctx.fillText(score + " cm", 40, 70);
}

function drawHighScore(score) {
    ctx.font = "18px Arial";
    ctx.fillStyle = "#a8e5e5";
    ctx.fillText("Top size: " + score + " cm", 70, 40);
}


let gameStart = false;

document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && gameStart === false ) {
       gameStart = true;
        otherFishies = otherFish.populateFish();
        score = 0;
       gameLoop();
    }
    

})



const introScreen = () => {
   
    ctx.fillStyle = "#dbd5d591"
    ctx.fillRect(262, canvas.height / 2 - 25, 400, 120)
    ctx.font = "900 25px 'Piedra', cursive"
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("Eat fish that are smaller than you.", canvas.width / 2, canvas.height / 2);
    ctx.fillText("Avoid fish that are bigger than you.", canvas.width / 2, canvas.height / 2 + 40);
    const img = new Image()
    img.src = fishBackground;
    img.onload = () => { ctx.drawImage(img, 560, 60)}
    
    ctx.font = "20px 'Piedra', cursive";
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 80);

}

const gameLoop = () => {
    if (gameStart) {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    fish.draw(xMouse, yMouse);
    otherFish.drawFish();
    otherFishies.forEach(f => f.drawFish());
    otherFishies.forEach(f => f.handleSwim());
    otherFishies.forEach(f => {
         if (f.handleCollisions(fish, xMouse, yMouse)) { 
             score += 2;
         } else if (f.handleCollisions(fish, xMouse, yMouse) === false){
             gameStart = false
            fish.width = 50;
            fish.height = 60;
             introScreen();
         }
         if (score > highScore) {
             highScore = score;
             localStorage.setItem(SAVE_KEY_SCORE, highScore)
         }
    });
    drawHighScore(highScore);
    drawScore(score);

    requestAnimationFrame(gameLoop);
    }
};





introScreen();



