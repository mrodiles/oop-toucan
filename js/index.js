const playButton = document.querySelector('.button');

const mainPage = document.getElementById('main-page');

const canvasHtml = document.getElementById('canvas');

playButton.addEventListener('click', () => {
    mainPage.classList.toggle('hidden');
    canvasHtml.style.display = 'block';
    game.start();
})



const game = new Game();