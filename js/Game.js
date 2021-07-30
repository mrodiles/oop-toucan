class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.score = 1;
        this.timer = 60;
        this.backgroundImg = new Component(this, 0, 0, 1000, 900, './images/background.jpg')
        this.cloudImg = new Component(this, 0, -60, 1050, 400, "./images/clouds.png")
        this.toucanImg = new Component(this, 755, 500, 250, 300, './images/toucan2.png')
        this.leafImg = new Component(this, 600, 5, 300, 200, './images/scoreLeaf.png')
        this.pineappleImg = new Component(this, 500, 50, 50, 75, './images/pineapple.png', 2)
        this.bananaImg = new Component(this, 500, 50, 50, 75, './images/banana.png', 1)
        this.papayaImg = new Component(this, 500, 50, 50, 75, './images/papaya.png', 4)
        this.watermelonImg = new Component(this, 500, 50, 50, 75, './images/watermelon.png', 5)
        this.pomImg = new Component(this, 500, 50, 50, 75, './images/pom.png', 3)
        this.appleImg = new Component(this, 500, 50, 50, 75, './images/apple.png', 3.5)

        this.fruits = [this.pineappleImg, this.bananaImg, this.papayaImg, this.watermelonImg, this.pomImg, this.appleImg]

        this.startButton = new Component(this, 500,250,400,200, './images/startButton.png')

        this.gameoverToucanImg = new Component(this, 755, 500, 250, 300, 300, './images/goToucan.png')
        
        this.gameTitleImg = new Component(this, 500, 0, 500, 300, 300, './images/You-Can-Toucan.png')
        
        this.gameoverImg = new Component(this, 300, 250, 350, 350, './images/gameover.png')
        





    }

    //game methods

    start() {
        // Loop thru each fruit
        this.fruits.forEach((fruit) => {
            // Draw fruit on to canvas
            this.drawLoop(fruit)
            // Attach event listener to each fruit
            fruit.mouse();
        })
        // Start game timer
        this.startTimer();


    }

    updateClock() {
        this.timer += 1
        setTimeout(() => this.updateClock(), 1000)
    }

    startTimer() {
        this.updateClock()
    }

    drawEverything(fruit) {

        this.backgroundImg.drawComponent();

        // loop thru fruits array and draw each on canvas
        this.fruits.forEach(fruit => fruit.drawComponent())

        this.cloudImg.drawComponent();

        this.toucanImg.drawComponent();

        this.leafImg.drawComponent();

        this.context.font = '30px arial';

        this.context.fillStyle = 'ORANGE';

        this.context.fillText(`Score: ${this.score}`, 700, 140);


    }

    drawLoop(fruit) {
        // Clear image every iteration
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Setting Fruit falling speed on y axis
        fruit.y += fruit.speed;
        // Reset coordinates after reaching end of window height (y axis)
        if (fruit.y > canvas.height) {
            fruit.y = 0;
            fruit.x = Math.random() * (canvas.width - 250);
        }

        // Check if timer is up, if not loop animation via recursion
        requestAnimationFrame(() => {
            if (this.timer >= 120) {
                this.gameOver();
            } else {
                this.drawLoop(fruit);
            }
        });

        // Draw images on canvas
        this.drawEverything(fruit);
    }

    gameOver() {
        this.gameoverImg.drawComponent();
        window.requestAnimationFrame(() => this.gameOver());
    }

}