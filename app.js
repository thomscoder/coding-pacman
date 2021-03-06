document.addEventListener('DOMContentLoaded', function () {

    const grid = document.querySelector('.grid');
    const width = 28;
    let score = 0;

    let lives = 5;
    displayScore = document.querySelector('#score');
    displayLives = document.querySelector('#lives');
    displayLives.innerHTML = lives;
    displayScore.innerHTML = score;
    const squares = [];
    layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
    //creo un elemnto div per ogni elemento dell'arrray e gli assegno una classe in base al numero che possiede
    //0 pac-dot
    // 1 muri
    //2 posto da cui i fantasmini partono
    //3 punti bonus
    //4 empty
    function renderBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);
            if (layout[i] === 0) {
                squares[i].classList.add('path');
            }
            else if (layout[i] === 1) {
                squares[i].classList.add('walls');
            }
            else if (layout[i] === 2) {
                squares[i].classList.add('startGhosts');
            }
            else if (layout[i] === 3) {
                squares[i].classList.add('bonus');
            }
        }
    }
    renderBoard();

    let pacPos = 490;

    squares[pacPos].classList.add('pacman');
    const mouth = document.createElement('div');

    //move pacman

    function movePacman(e) {
        squares[pacPos].classList.remove('pacman');
        switch (e.keyCode) {
            case 37: if (pacPos % width !== 0 && !squares[pacPos - 1].classList.contains('walls')) {
                pacPos -= 1;
                squares[pacPos].style.transform = 'rotate(180deg)';
            }
                break;
            case 38: if (pacPos - width >= 0 && !squares[pacPos - width].classList.contains('walls')) {
                pacPos -= width;
                squares[pacPos].style.transform = 'rotate(-90deg)';
            }
                break;
            case 39: if (pacPos % width < width - 1 && !squares[pacPos + 1].classList.contains('walls')) {
                pacPos += 1;
            }
                break;
            case 40: if (pacPos + width < width * width && !squares[pacPos + width].classList.contains('walls')) {
                pacPos += width;
                squares[pacPos].style.transform = 'rotate(90deg)';
            }
                break;
        }
        squares[pacPos].classList.add('pacman');
        dotsEaten(); //viene richiamata da dentro la funzione movePacman
        bonusEaten();
        moveGhosts();
    }
    document.addEventListener('keyup', movePacman);

    //eat the dots
    function dotsEaten() {
        if (squares[pacPos].classList.contains('path')) {
            score++;
            displayScore.innerHTML = score;
            squares[pacPos].classList.remove('path');
        }
    }
    function bonusEaten() {
        if (squares[pacPos].classList.contains('bonus')) {
            score += 5;
            displayScore.innerHTML = score;
            squares[pacPos].classList.remove('bonus');
        }
    }
    class Ghost {
        constructor(className, startPos, speed) {
            this.className = className;
            this.startPos = startPos;
            this.speed = speed;
            this.currentPos = startPos;
            this.timerId = NaN;
        }
    }
    ghosts = [
        new Ghost('white', 348, 260),
        new Ghost('blue', 377, 400),
        new Ghost('purple', 350, 267),
        new Ghost('red', 380, 555)
    ];


    ghosts.forEach(ghost => {
        squares[ghost.currentPos].classList.add(ghost.className);
        squares[ghost.currentPos].classList.add('ghost');

    });
    ghosts.forEach(ghost => moveGhosts(ghost));

    function moveGhosts(ghost) {
        const directions = [-1, +1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        ghost.timerId = setInterval(function () {
            if (squares[ghost.currentPos] === squares[pacPos]) {
                lives -= 1;
                displayLives.innerHTML = lives;
                if (lives === 0) {
                    alert("Hai perso");
                }
            }
            if (!squares[ghost.currentPos + direction].classList.contains('walls') && !squares[ghost.currentPos +
                direction].classList.contains('ghost')) {
                squares[ghost.currentPos].classList.remove(ghost.className, 'ghost');
                ghost.currentPos += direction;
                squares[ghost.currentPos].classList.add(ghost.className, 'ghost');
            }
            else direction = directions[Math.floor(Math.random() * directions.length)]
        }, ghost.speed)
    }






})