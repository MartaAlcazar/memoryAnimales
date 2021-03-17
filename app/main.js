// 
// 
// 
// 
//NIVEL 1
// 
// 
// 
// 

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
var counter = []

function flipCard() {

    if (this === firstCard) return;

    this.classList.add('flip')

    if (!hasFlippedCard) {
        //primer click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // segundo click
        hasFlippedCard = false;
        secondCard = this

        checkForMatch();

    }
}

function checkForMatch() {
    if (firstCard.dataset.img ===
        secondCard.dataset.img) {
        // its a match
        disableCards();


    } else {
        unflipCards();

    }
}

function disableCards() {

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    scoreCounter()

}

let currentScore = document.querySelectorAll('.score_counter');

function scoreCounter() {


    if (firstCard.dataset.img ===
        secondCard.dataset.img) {
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

            nextLevel()
        }, 700);
    }



}



function nextLevel() {
    let gameboard = document.getElementById('boardGame1')
    let pasarAlNivel2 = document.getElementById('pasarAlNivel2')
    let scoreCounterOut = document.getElementById('contadorPuntos1')

    gameboard.classList.toggle('animate__animated');
    gameboard.classList.toggle('animate__backOutLeft');

    scoreCounterOut.classList.toggle('animate__animated');
    scoreCounterOut.classList.toggle('animate__backOutRight')

    document.body.style.backgroundColor = "#85a555";



    setTimeout(() => {
        pasarAlNivel2.classList.add('doShow')

        pasarAlNivel2.classList.toggle('animate__animated')
        
        pasarAlNivel2.classList.toggle('animate__jackInTheBox')
    }, 500);


}




// 
// 
// 
// 



function unflipCards() {
    // not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 600);
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();






cards.forEach(card => card.addEventListener('click', flipCard))