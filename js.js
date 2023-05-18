let cards = document.querySelectorAll("button");
const cardClasses = ['hearts', 'hearts', 'hearts', 'hearts', 'diamonds', 'diamonds', 'clubs', 'clubs', 'clubs', 'clubs', 'spades', 'spades', 'spades', 'spades', 'joker'];
let randomised = cardClasses.sort(() => 0.5 - Math.random());
let clickCounter = 0;
let first = '';
let second = '';
let pressed = '';
let jokerClick = 0;
let pair = 0;


for (i = 0; i <= randomised.length - 1; i++) {
    console.log(i + 1 + ' ' + randomised[i]);
}


cards.forEach(individualCard => {
    individualCard.addEventListener('click', function handleClick() {

        clickCounter++;

        if (individualCard.value === '0') {
            individualCard.classList.add(randomised[0]);
        } else if (individualCard.value === '1') {
            individualCard.classList.add(randomised[1]);
        } else if (individualCard.value === '2') {
            individualCard.classList.add(randomised[2]);
        } else if (individualCard.value === '3') {
            individualCard.classList.add(randomised[3]);
        } else if (individualCard.value === '4') {
            individualCard.classList.add(randomised[4]);
        } else if (individualCard.value === '5') {
            individualCard.classList.add(randomised[5]);
        } else if (individualCard.value === '6') {
            individualCard.classList.add(randomised[6]);
        } else if (individualCard.value === '7') {
            individualCard.classList.add(randomised[7]);
        } else if (individualCard.value === '8') {
            individualCard.classList.add(randomised[8]);
        } else if (individualCard.value === '9') {
            individualCard.classList.add(randomised[9]);
        } else if (individualCard.value === '10') {
            individualCard.classList.add(randomised[10]);
        } else if (individualCard.value === '11') {
            individualCard.classList.add(randomised[11]);
        } else if (individualCard.value === '12') {
            individualCard.classList.add(randomised[12]);
        } else if (individualCard.value === '13') {
            individualCard.classList.add(randomised[13]);
        } else if (individualCard.value === '14') {
            individualCard.classList.add(randomised[14]);
        } else if (individualCard.value === '15') {
            individualCard.classList.add(randomised[15]);
        } else if (individualCard.value === '16') {
            individualCard.classList.add(randomised[16]);
        }

        individualCard.classList.remove('card');
        individualCard.classList.add('pressed');
        console.log(individualCard.className);
    }
    )
});




cards.forEach(individualCard => {
    individualCard.addEventListener('click', function () {

        if (individualCard.className === 'joker pressed') {
            jokerClick++;

            if (jokerClick === 1) {
                document.getElementById('life-one').classList.add('lifeGone');
            }


            if (jokerClick === 2) {
                document.getElementById('life-two').classList.add('lifeGone');
                let btn = document.querySelectorAll('button');
                btn.forEach(button => {
                    button.classList.add('lifeGone');
                })
                setTimeout(() => {
                    document.getElementById('cards').style.display = 'none';
                    let endGame = document.getElementById('game-page');

                    let gameOver = document.createElement('div');
                    gameOver.className = 'game-over';
                    endGame.appendChild(gameOver);
                }, 1100);
            }
        }
    })
})


cards.forEach(individualCard => {
    individualCard.addEventListener('click', function () {

        if (clickCounter === 1) {
            first = individualCard.className;
        }
        if (clickCounter === 2) {
            second = individualCard.className;
        }

        console.log(first, second);

        if (clickCounter > 2) {
            let closeCards = document.querySelectorAll('button.pressed');
            closeCards.forEach(individual => {
                if (!(individual.className.includes('lifeGone'))) {
                    individual.className = '';
                    individual.classList.add('card');
                    clickCounter = 0;
                }
            }
            )
        }

        if (clickCounter >= 2) {
            setTimeout(() => {
                let closeCards = document.querySelectorAll('button.pressed');
                closeCards.forEach(individual => {
                    if (!(individual.className.includes('lifeGone'))) {
                        individual.className = '';
                        individual.classList.add('card');
                        clickCounter = 0;
                    }
                }
                )

            }, 3000);
        }

        if (clickCounter === 2 && first === second) {
            pair++;
            console.log(pair);
            if (pair === 7) {
                setTimeout(() => {
                    document.getElementById('cards').style.display = 'none';
                    let endGame = document.getElementById('game-page');

                    let youWon = document.createElement('div');
                    youWon.className = 'you-won';
                    
                    endGame.appendChild(youWon);
                }, 1000);

            }

            let remov = document.querySelectorAll('button.pressed');
            remov.forEach(individualRemov => {
                individualRemov.classList.add('lifeGone');
                clickCounter = 0;
            })

        }

    })
}
)


