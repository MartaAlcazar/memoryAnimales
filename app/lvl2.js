// 
// 
// 
// 
// NIVEL2
// 
// 
// 
// 

const cards2 = document.querySelectorAll('.memory-card');

let hasFlippedCard2 = false;
let firstCard2, secondCard2, thirdCard2;
var counter = []

function flipCard() {


    this.classList.add('flip')

    if (!hasFlippedCard2) {
        //primer click
        hasFlippedCard2 = true;
        firstCard2 = this;

    } else {
        // segundo click
        hasFlippedCard2 = false;
        secondCard2 = this;

        flipCard2();
    }


}

function flipCard2() {


    this.classList.add('flip')

    if (hasFlippedCard2 = true &&
        secondCard2 == this) {
        // tercer click
        hasFlippedCard2 = false;
        thirdCard2 = this

        checkForMatch();

    }
}


function checkForMatch() {
    if ((firstCard2.dataset.img ===
        secondCard2.dataset.img) && (firstCard2.dataset.img === thirdCard2.dataset.img)) {
        // its a match
        disableCards();


    } else {
        unflipCards();

    }
}

function disableCards() {

    firstCard2.removeEventListener('click', flipCard);
    secondCard2.removeEventListener('click', flipCard);
    thirdCard2.removeEventListener('click', flipCard);


    scoreCounter()

}

let currentScore2 = document.querySelectorAll('.score_counter');

function scoreCounter() {


    if ((firstCard2.dataset.img ===
        secondCard2.dataset.img) && (firstCard2.dataset.img === thirdCard2.dataset.img)) {
        counter.push('win')
    } else {
        console.log('oh no')
    }

    let noPoints = document.getElementById('score_counter_no_points')
    let onePoints = document.getElementById('score_counter_one_point')
    let twoPoints = document.getElementById('score_counter_two_points')
    let threePoints = document.getElementById('score_counter_three_points')
    let fourPoints = document.getElementById('score_counter_four_points')
    let fivePoints = document.getElementById('score_counter_five_points')
    let sixPoints = document.getElementById('score_counter_six_points')


    if (counter.length === 1) {
        noPoints.classList.add('hidden')
        onePoints.classList.remove('hidden')

    } else if (counter.length === 2) {
        onePoints.classList.add('hidden')
        twoPoints.classList.remove('hidden')
    } else if (counter.length === 3) {
        twoPoints.classList.add('hidden')
        threePoints.classList.remove('hidden')

    } else if (counter.length === 4) {
        threePoints.classList.toggle('hidden')
        fourPoints.classList.remove('hidden')

    } else if (counter.length === 5) {
        fourPoints.classList.toggle('hidden')
        fivePoints.classList.remove('hidden')

    } else if (counter.length === 6) {
        fivePoints.classList.toggle('hidden')
        sixPoints.classList.remove('hidden')

        setTimeout(() => {

            nextLevel2()
        }, 800);
    }



}



function nextLevel2() {
    let gameboard = document.getElementById('boardGame1')
    let pasarAlNivel2 = document.getElementById('pasarAlNivel2')
    let scoreCounterOut = document.getElementById('contadorPuntos1')

    gameboard.classList.toggle('animate__animated');
    gameboard.classList.toggle('animate__backOutLeft');

    scoreCounterOut.classList.toggle('animate__animated');
    scoreCounterOut.classList.toggle('animate__backOutRight')

    document.body.style.backgroundColor = "#85a555";


    pasarAlNivel2.classList.add('doShow')


    pasarAlNivel2.classList.toggle('animate__animated')
    pasarAlNivel2.classList.toggle('animate__tada')

}

function unflipCards() {
    // not a match
    setTimeout(() => {
        firstCard2.classList.remove('flip');
        secondCard2.classList.remove('flip');
    }, 800);
}

(function shuffle() {
    cards2.forEach(card2 => {
        let randomPos = Math.floor(Math.random() * 12);
        card2.style.order = randomPos;
    });
})();






cards2.forEach(card2 => card2.addEventListener('click', flipCard))