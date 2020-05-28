
export default class Fish {

    constructor(ctx) {
        this.ctx = ctx;
        this.image = document.getElementById("littleFish");
        this.height = 50;
        this.width = 40;
      
    }

    draw(xMouse, yMouse) {
        let xCenter = xMouse - (this.width / 2);
        let yCenter = yMouse - (this.height / 2);
        // console.log(yMouse)
        if (xMouse < 0 ) {
            xCenter = xCenter - xCenter;
        }
        if (xMouse >= 920) {
            xCenter = 920 - this.width;
        }
        if (yMouse < 0) {
            yCenter = yCenter - yCenter;
        }
        if (yMouse >= 540) {
            yCenter = 540 - this.height;
        }
        this.ctx.drawImage(this.image, xCenter, yCenter, this.height, this.width);
        
       
    }

   
        
    

   

}