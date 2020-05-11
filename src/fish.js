export default class Fish {
    constructor(ctx) {
        this.ctx = ctx,
        this.image = document.getElementById("littleFish"),
        this.height = 50,
        this.width = 40
    }

    draw(xMouse, yMouse) {
        // this.ctx.fillStyle = "red"
        
        let xCenter = xMouse - (this.width / 2);
        let yCenter = yMouse - (this.height / 2);
        this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width)

        // this.ctx.fillRect(xMouse, yMouse, this.image.height, this.image.width)
        if (this.xMouse < 0) this.xMouse = 0;

    }

   

}