class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.score = 1;
        this.timer = 110;
        this.backgroundImg = new Component(this, 0, 0, 1000, 900, './images/background.jpg')
        this.cloudImg = new Component(this, 0, -60, 1050, 400, "./images/clouds.png")
        this.toucanImg = new Component(this, 755, 500, 250, 300, './images/toucan2.png')
        this.leafImg = new Component(this, 600, 5, 300, 200, './images/scoreLeaf.png')
        this.pineappleImg = new Component(this, 500, 50, 50, 75, './images/pineapple.png')
        this.gameoverImg = new Component(this, 300, 250, 350, 350, './images/gameover.png')
    }

    //game methods

    start() {
        this.pineappleImg.mouse();
        // this.startTimer();
        this.drawLoop();

    }

    updateClock() {
        this.timer += 1
        console.log({
            timer: this.timer
        })
        setTimeout(() => this.updateClock(), 1000)
    }

    startTimer() {
        this.updateClock()
    }

    drawEverything() {

        this.backgroundImg.drawComponent();

        this.pineappleImg.drawComponent();

        this.cloudImg.drawComponent();

        this.toucanImg.drawComponent();

        this.leafImg.drawComponent();

        this.context.font = '30px arial';

        this.context.fillStyle = 'ORANGE';

        this.context.fillText(`Score: ${this.score}`, 700, 140);

       
    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawEverything();
        
        this.pineappleImg.y += 4;
        if (this.pineappleImg.y > canvas.height) {
            this.pineappleImg.y = 0;
            this.pineappleImg.x = Math.random() * (canvas.width - 250);
        }


        requestAnimationFrame(() => {

            if (this.timer >= 120) {
                this.gameOver();
            } else {
                this.drawLoop();
            }
        });
    }

    gameOver() {
        this.gameoverImg.drawComponent();
        window.requestAnimationFrame(() => this.gameOver());
    }

}