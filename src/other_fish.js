import roundFish from './images/roundfish.png';
import roundFishFlip from './images/roundfish-flip.png';
import {setState} from './index';


export default class OtherFish {
    constructor(ctx, fish, xMouse, yMouse) {
        this.fishSizes = { 40: '25', 50: '35', 60: '45', 80: '65', 100: '85', 120: '105', 130: '115', 140: '125' };
        this.keys = Object.keys(this.fishSizes);
        this.ctx = ctx;
        this.fishImage = new Image();
        this.fishImage.src = roundFish;
        this.height = this.keys[(Math.floor(Math.random() * this.keys.length))];
        this.width = this.fishSizes[this.height];
        this.x = this.getRandomInt(-500, -100);
        this.y = this.getRandomInt(20, 800);
        this.xVelocity = this.getVelocity(1, 2.2);
        this.yVelocity = this.getVelocity(1, 1.5);
        this.handleCollisions = this.handleCollisions.bind(this);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getVelocity(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
       
    }

    handleCollisions(fish, xMouse, yMouse) {
        let xCenter = xMouse - (fish.width / 2);
        let yCenter = yMouse - (fish.height / 2);
        const vectorX = (xCenter + fish.width / 2) - (this.x + this.width / 2);
        const vectorY  = (yCenter + fish.height / 2) - (this.y + this.height / 2);
        const halfWidth = ((fish.width / 2) + (this.width / 2)) / 1.3; // make up for abnormality in image sizing
        const halfHeight = ((fish.height / 2) + (this.height / 2)) / 1.5;  //^
            if ((Math.abs(vectorX) < halfWidth) && (Math.abs(vectorY) < halfHeight)) {
                if (this.width < fish.width && this.height < fish.height) {
                    fish.width += 2;
                    fish.height += 2;
                    this.x = this.getRandomInt(-500, -50);
                    this.y = this.getRandomInt(-300, -100);
                    return true;
                } else {
                    return false;
                }
                
                
            }
    }

    populateFish() {
     
        let fishies = [];
        let maxfish = 20;
        for (let i = 0; i < maxfish; i++) {
            fishies.push(new OtherFish(this.ctx))
        }
        return fishies;
        
    }

    drawFish() {
        this.ctx.drawImage(this.fishImage, this.x, this.y, this.height, this.width)
    }


    handleSwim() {
        if (this.x <= -100) {
            this.fishImage.src = roundFishFlip
            this.xVelocity = this.getVelocity(0.5, 3)
        } else if (this.x > 920) {
            this.fishImage.src = roundFish;
            this.xVelocity = this.getVelocity(-0.5, -3)
        } if (this.y < -100) {
            this.yVelocity = this.getVelocity(0.5, 2.5);
        } else if (this.y > 600) {
            this.yVelocity = this.getVelocity(-0.5, -2.5);
        }
        this.x += this.xVelocity
        this.y += this.yVelocity
    }
  
}
