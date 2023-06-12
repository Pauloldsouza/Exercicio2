const lista = []
const submit = document.querySelector('#submit')
const question2 = document.querySelector('#question2')
const board = document.querySelector('#board')

submit.addEventListener('click', ()=> {
  const quantity = document.querySelector('#quantity').value
  for (var i = 1; i <= quantity; i++) {
    const player = document.createElement('input')
    player.placeholder = 'Nome do jogador.'
    player.className = 'name'
    player.id = 'p' + i
    question2.appendChild(player)
  }
  const newButton = document.createElement('button')
  newButton.innerText = 'Start'
  newButton.addEventListener('click', startGame)
  question2.appendChild(newButton)
})

function startGame () {
  const currentPlayers = document.querySelectorAll('.name')
  currentPlayers.forEach(p=> {
    lista.push(p.value)
  })
  createBoard()
}

function createBoard () {
  lista.forEach(player => {
    const outDiv = document.createElement('div')
    const scoreBoard = document.createElement('div')
    scoreBoard.className = 'score'
    scoreBoard.innerText = Number(0)
    const nameBoard = document.createElement('div')
    nameBoard.innerText = player
    const buttonsBoard = document.createElement('div')
    const plusBtn = document.createElement('button')
    plusBtn.innerText = '+'
    const lessBtn = document.createElement('button')
    lessBtn.innerText = '-'


    buttonsBoard.append(plusBtn, lessBtn)
    outDiv.append(scoreBoard, nameBoard, buttonsBoard)
    board.appendChild(outDiv)

  })
}