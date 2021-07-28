class Component {
    constructor(classGame, x, y, w, h, imageSrc){
        this.game = classGame;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h; 
        this.img = new Image();
        this.img.src = imageSrc;
    }
    // to make background
    drawComponent(){
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    


mouse() {
    document.addEventListener("click", event => {



        if (event.x > this.x &&
            event.y > this.y &&
            event.x < this.x + this.width &&
            event.y < this.y + this.height) {
            this.game.score++;
        }

        
    
    });
    
}
}