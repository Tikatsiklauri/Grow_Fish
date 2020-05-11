export default class Fish {
    constructor(ctx, GAME_WIDTH, GAME_HEIGHT) {
        this.ctx = ctx;
        this.image = document.getElementById("littleFish");
        this.height = 50;
        this.width = 40;
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
    }

    draw(xMouse, yMouse) {
        let xCenter = xMouse - (this.width / 2);
        let yCenter = yMouse - (this.height / 2);
        this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width);
        
        if (xMouse < 0) {
            xMouse = 0;
        }
        
        // if (this.xCenter > this.width / 2 + this.gameWidth) this.xCenter = 920;
    }

   
        
    

   

}