import roundFish from './images/roundfish.png'


export default class OtherFish {
    constructor(ctx, fish, xMouse, yMouse) {
        this.fishSizes = { 30: '20', 40: '25', 50: '35', 60: '45', 80: '65', 100: '85', 120: '105', 130: '115' };
        this.keys = Object.keys(this.fishSizes);
        this.ctx = ctx;
        this.fishImage = new Image();
        this.fishImage.src = roundFish;
        this.height = this.keys[(Math.floor(Math.random() * this.keys.length))];
        this.width = this.fishSizes[this.height];
        this.x = this.getRandomInt(-400, -30);
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
        let xDistance = xMouse - this.x;
        let yDistance = yMouse - this.y;

        let dist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

       if (dist < (fish.width / 2) && 
            dist < (fish.height / 2)) {
           console.log(dist)
       debugger
        if  (this.height < fish.height) {
                fish.width += 0.5;
                fish.height += 0.5;
                this.x = this.getRandomInt(-600, -50);
                this.y = this.getRandomInt(-400, -10);
        } else if (this.x + this.width >= xMouse + (fish.width / 2) &&
            this.x <= (xMouse + (fish.width / 2))  + fish.width &&
            this.y + this.height >= yMouse + (fish.height / 2)  &&
            this.y <= (yMouse + (fish.height / 2))  + fish.height){
                alert("Game Over");
                clearInterval(interval);
            }
        }
        }

            // if (dist < (fish.width / 2) + (this.width / 2) &&
            //     dist < (fish.height / 2) + (this.height / 2) &&
            //     this.width < fish.width && this.height < fish.height) {
            //     fish.width += 0.5;
            //     fish.height += 0.5;
            //     this.x = this.getRandomInt(-500, -50);
            //     this.y = this.getRandomInt(-300, -100);
            // } else if (dist < (fish.width / 2) + (this.width / 2) &&
            //     dist < (fish.height / 2) + (this.height / 2) &&
            //     this.width > fish.width && this.height > fish.height) {
            //     alert("Game Over");
            //     clearInterval(interval);
            // }
                
    

    populateFish() {
     
        let fishies = [];
        let maxfish = 5;
        for (let i = 0; i < maxfish; i++) {
            fishies.push(new OtherFish(this.ctx))
        }
        return fishies;
        
    }

    drawFish() {
        this.ctx.drawImage(this.fishImage, this.x, this.y, this.height, this.width)
    }


    handleSwim() {
        if (this.x < -200) {
            this.xVelocity = this.getVelocity(0.5, 3)
        } else if (this.x > 920) {
            this.xVelocity = this.getVelocity(-0.5, -3)
        } if (this.y < -100) {
            this.yVelocity = this.getVelocity(0.5, 3);
        } else if (this.y > 600) {
            this.yVelocity = this.getVelocity(-0.5, -3);
        }
        this.x += this.xVelocity
        this.y += this.yVelocity
    }
  
}
