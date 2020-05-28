import './styles/index.scss';
import Fish from './fish';
import OtherFish from './other_fish';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 920;
const GAME_HEIGHT = 540;

const fish = new Fish(ctx);
let otherFish = new OtherFish(ctx);
let otherFishies = otherFish.populateFish();
let xMouse;
let yMouse;

let mouse = document.addEventListener('mousemove', function(e){
    let rect = canvas.getBoundingClientRect();
    xMouse = (e.clientX - rect.left);
    yMouse = (e.clientY - rect.top);
});



const SAVE_KEY_SCORE = "highScore" //save key of local storage of high score

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
    ctx.fillStyle = "#81dde4";
    ctx.fillText(score + " cm", 8, 50);
}

function drawHighScore(score) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#81dde4";
    ctx.fillText("Top size: " + score + " cm", 8, 20);
}

const gameLoop = () => {
  
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    fish.draw(xMouse, yMouse);
    otherFish.drawFish();
    otherFishies.forEach(f => f.drawFish());
    otherFishies.forEach(f => f.handleSwim());
    otherFishies.forEach(f => {
         if (f.handleCollisions(fish, xMouse, yMouse)) score += 2;
         if (score > highScore) {
             highScore = score;
             localStorage.setItem(SAVE_KEY_SCORE, highScore)
         }
    });
    drawHighScore(highScore);
    drawScore(score);
  
    console.log(score);

    requestAnimationFrame(gameLoop);
};




gameLoop();


