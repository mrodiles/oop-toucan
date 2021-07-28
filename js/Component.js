class Component {
    constructor(classGame, x, y, w, h, imageSrc, speed, startX){
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h; 
        this.img = new Image();
        this.img.src = imageSrc;
        this.speed = speed;
    }
    // to make background
    drawComponent(){
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }




mouse() {
    document.addEventListener("mousedown", event => {

        if (event.x > this.x &&
            event.y > this.y &&
            event.x < this.x + this.width &&
            event.y < this.y + this.height) {
            // if clicked, reset y to 0 (top of window) and x to random coordinate
            this.y = 0;
            this.x = Math.random() * (canvas.width - 250);

            // Increment score
            this.game.score++;
        }

        
    
    });
    
}
}