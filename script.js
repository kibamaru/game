const rollDice = document.getElementById('rollDice')
const de1 = document.getElementById('de1')
const de2 = document.getElementById('de2')
const de3 = document.getElementById('de3')
const de4 = document.getElementById('de4')
const de5 = document.getElementById('de5')
const de6 = document.getElementById('de6')
const globalScore1 = document.getElementById('global1')
const globalScore2 = document.getElementById('global2')
const currentScore1 = document.getElementById('currentScore1')
const currentScore2 = document.getElementById('currentScore2')
const hold = document.getElementById('hold')
const regle = document.getElementById('regle')
const pseudo1 = document.getElementById('pseudo1')
const pseudo2 = document.getElementById('pseudo2')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
let currentScore = currentScore1
let diceValue = 0
let roundValue = 0
let globalValue1 = 0
let globalValue2 = 0

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

rollDice.addEventListener('click', () => {
  de1.style.display = 'none'
  de2.style.display = 'none'
  de3.style.display = 'none'
  de4.style.display = 'none'
  de5.style.display = 'none'
  de6.style.display = 'none'

  diceValue = random(1, 6)

  if(diceValue === 1) {
    setTimeout(() => {
      de1.style.display = 'block';
      roundValue = 0;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
      if(currentScore === currentScore1) {
        globalValue1 = globalValue1 + roundValue
        globalScore1.innerHTML = `<p id="global1">${globalValue1}<p>`
        currentScore = currentScore2
        currentScore1.innerHTML = `<p id="currentScore1">0<p>`
        roundValue = 0
      } else {
        globalValue2 = globalValue2 + roundValue
        globalScore2.innerHTML = `<p id="global2">${globalValue2}<p>`
        currentScore = currentScore1
        currentScore2.innerHTML = `<p id="currentScore1">0<p>`
        roundValue = 0
      }
    },  "50");
  }
  else if (diceValue === 2) {
    setTimeout(() => {
      de2.style.display = 'block';
      roundValue = roundValue + 2;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    }, "50");
  }
  else if (diceValue === 3) {
    setTimeout(() => {
      de3.style.display = 'block';
      roundValue = roundValue + 3;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    }, "50");
  }
  else if (diceValue === 4) {
    setTimeout(() => {
      de4.style.display = 'block';
      roundValue = roundValue + 4;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    }, "50");
  }
  else if (diceValue === 5) {
    setTimeout(() => {
      de5.style.display = 'block';
      roundValue = roundValue + 5;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    }, "50");
  }
  else if (diceValue === 6) {
    setTimeout(() => {
      de6.style.display = 'block';
      roundValue = roundValue + 6;
      currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    }, "50");
  }
})

hold.addEventListener('click', () => {
  if(currentScore === currentScore1) {
    globalValue1 = globalValue1 + roundValue
    globalScore1.innerHTML = `<p id="globalScore1">${globalValue1}<p>`
    roundValue = 0
    currentScore.innerHTML = `<p id="currentScore1">${roundValue}<p>`
    currentScore = currentScore2
  } else {
    globalValue2 = globalValue2 + roundValue
    globalScore2.innerHTML = `<p id="globalScore2">${globalValue2}<p>`
    roundValue = 0
    currentScore.innerHTML = `<p id="currentScore2">${roundValue}<p>`
    currentScore = currentScore1
  }
  if(globalValue1 >= 100) {
    alert('Player1 a gagné !')
    rollDice.style.display = 'none'
    hold.style.display = 'none'
  } else if (globalValue2 >= 100) {
    alert('Player2 a gagné !')
    rollDice.style.display = 'none'
    hold.style.display = 'none'
  }
})

newGame.addEventListener('click', () => {
  de1.style.display = 'none'
  de2.style.display = 'none'
  de3.style.display = 'none'
  de4.style.display = 'none'
  de5.style.display = 'none'
  de6.style.display = 'none'
  currentScore = currentScore1
  diceValue = 0
  roundValue = 0
  globalValue1 = 0
  globalValue2 = 0
  globalScore1.innerHTML = `<p id="globalScore1">${globalValue1}<p>`
  globalScore2.innerHTML = `<p id="globalScore2">${globalValue2}<p>`
  currentScore1.innerHTML = `<p id="currentScore1">${roundValue}<p>`
  currentScore2.innerHTML = `<p id="currentScore2">${roundValue}<p>`
  rollDice.style.display = 'initial'
  hold.style.display = 'initial'
  player1.innerText = 'PLAYER 1 '
  player2.innerText = 'PLAYER 2 '

})

regle.addEventListener('click', () => {
  alert(`Règles :
  Le jeu comprend 2 joueurs sur un seul et même écran.
  Chaque joueur possède un score temporaire (ROUND) et un score global (Sous le pseudo du joueur).
  À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
  résultat d\’un lancer est ajouté au ROUND. 
  Lors de son tour, le joueur peut décider à tout moment de:
  - Cliquer sur l\’option “ENCAISSER”, qui permet d\’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
  tour de l\’autre joueur.
  - Lancer le dé. S\’il obtient un 1, son score ROUND est perdu et c\’est la fin de son tour.
  Le premier joueur qui atteint les 100 points sur global gagne le jeu`)
})

pseudo1.addEventListener('click', () => {
  let name1 = prompt('Quel est votre nom ?')
  if (name1 === '') {
    name1 = 'PLAYER 1 '
  }
  player1.innerText = `${name1}`
})

pseudo2.addEventListener('click', () => {
  let name2 = prompt('Quel est votre nom ?')
  if (name2 === '') {
    name2 = 'PLAYER 2 '
  }
  player2.innerText = `${name2}`
})