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
    xMouse = e.clientX - rect.left;
    yMouse = e.clientY - rect.top;
})

//array of fish objects 


function gameLoop() {
  
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    fish.draw(xMouse, yMouse)
    otherFish.drawFish();
    otherFishies.forEach(f => f.drawFish());
    otherFishies.forEach(f => f.handleSwim());

    // console.log(otherFishies)
  

    requestAnimationFrame(gameLoop)
}




gameLoop();


