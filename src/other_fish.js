
export default class OtherFish {
    constructor(ctx) {
        this.fishSizes = { 30: '20', 40: '25', 50: '35', 60: '45', 80: '65', 100: '85', 120: '105', 130: '115' },
        this.keys = Object.keys(this.fishSizes),
        this.ctx = ctx,
        this.fishImage = new Image(),
        this.fishImage.src = "../assets/images/newfishsmall.png",
        this.height = this.keys[(Math.floor(Math.random() * this.keys.length))],
        this.width = this.fishSizes[this.height],
        this.x = this.getRandomInt(-300, -30),
        this.y = this.getRandomInt(20, 800),
        this.velocity = this.getVelocity(1, 2.2)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getVelocity(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    populateFish() {
        let fishies = [];
        let maxfish = 30;
        for (let i = 0; i < maxfish; i++) {
            fishies.push(new OtherFish(this.ctx))
        }
        return fishies;
    }

    drawFish() {
        this.ctx.drawImage(this.fishImage, this.x, this.y, this.height, this.width)
    }

    handleSwim() {
        if (this.x < -100) {
        this.velocity = this.getVelocity(3, 4.2)
        this.y = this.getRandomInt(20, 800)
        } else if (this.x > 920) {
            this.velocity = this.getVelocity(-3, -4.2)
            this.y = this.getRandomInt(20, 800)
        }
        // this.fishImage.src = "../assets/images/newfishsmall.png"
        this.x += this.velocity
    }
  
}
