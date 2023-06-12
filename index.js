const lista = [];
var pontos = [];
const submit = document.querySelector("#submit");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const board = document.querySelector("#board");
const under = document.getElementById("under");
under.className = "msg";

submit.addEventListener("click", () => {
  var quantity = document.querySelector("#quantity").value;
  const newButton = document.createElement("button");
  quantity = Number(quantity);
  switch (quantity) {
    case 2:
      question1.classList.add("hide");
      for (var i = 1; i <= quantity; i++) {
        const player = document.createElement("input");
        player.placeholder = "Nome do jogador.";
        player.className = "name";
        player.id = "p" + i;
        question2.appendChild(player);
      }

      newButton.innerText = "Start";
      newButton.className = "endBtn";
      newButton.addEventListener("click", startGame);
      question2.appendChild(newButton);
      break;
    case 3:
      question1.classList.add("hide");
      for (var i = 1; i <= quantity; i++) {
        const player = document.createElement("input");
        player.placeholder = "Nome do jogador.";
        player.className = "name";
        player.id = "p" + i;
        question2.appendChild(player);
      }

      newButton.innerText = "Start";
      newButton.className = "endBtn";
      newButton.addEventListener("click", startGame);
      question2.appendChild(newButton);
      break;
    case 4:
      quantity = 2;
      question1.classList.add("hide");
      for (var i = 1; i <= quantity; i++) {
        const player = document.createElement("input");
        player.placeholder = "Nome da dupla";
        player.className = "name";
        player.id = "p" + i;
        question2.appendChild(player);
      }

      newButton.innerText = "Start";
      newButton.className = "endBtn";
      newButton.addEventListener("click", startGame);
      question2.appendChild(newButton);
      break;
    default:
      alert("Não é permitido a quantidade de jogadores informada");
      document.querySelector("#quantity").value = "";
      break;
  }
});

function startGame() {
  question2.classList.add("hide");
  board.style.display = "flex";
  const currentPlayers = document.querySelectorAll(".name");
  currentPlayers.forEach((p) => {
    lista.push(p.value);
  });
  createBoard();
}

function createBoard() {
  lista.forEach((player) => {
    const outDiv = document.createElement("div");
    outDiv.className = "eachPlayer";
    const scoreBoard = document.createElement("div");
    scoreBoard.className = "score";
    var points = Number(0);
    scoreBoard.innerText = points;
    const nameBoard = document.createElement("div");
    nameBoard.innerText = player;
    const buttonsBoard = document.createElement("div");
    buttonsBoard.className = "buttonsBoard";
    const plusBtn = document.createElement("button");
    plusBtn.className = "btn";
    plusBtn.innerText = "+";
    plusBtn.addEventListener("click", () => {
      if (points === 5) {
        points++;
        scoreBoard.innerText = points;
        board.innerText = `Vitória de 
        ${player}!
        parabéns...`;
        under.innerText = "Vamos jogar mais uma!";
      } else {
        points++;
        scoreBoard.innerText = points;
      }
      console.log(scoreBoard.innerText);
      showStatus();
    });
    const lessBtn = document.createElement("button");
    lessBtn.className = "btn";
    lessBtn.innerText = "-";
    lessBtn.addEventListener("click", () => {
      if (points === 0) {
        alert("não dá pra baixar mais do que zero!");
      } else {
        points--;
        scoreBoard.innerText = points;
      }
      showStatus();
    });

    buttonsBoard.append(plusBtn, lessBtn);
    outDiv.append(scoreBoard, nameBoard, buttonsBoard);
    board.appendChild(outDiv);
    showStatus();
  });
}

function showStatus() {
  pontos = [];
  const currentChampion = document.querySelectorAll(".score");
  currentChampion.forEach((p) => {
    pontos.unshift(Number(p.innerText));
  });
  if (pontos.length <= 2) {
    let a = Number(pontos[0]);
    let b = Number(pontos[1]);
    if (a === 0 && b === 0) {
      under.innerText = "Começou o jogo";
    } else if (a - b === 0) {
      under.innerText = "Jogo empatado";
    } else if (a - b === 3 || b - a === 3) {
      under.innerText = "Parece que temos um campeão chegando!";
    } else if ((a - b === 4 && b === 0) || (b - a === 4 && a === 0)) {
      under.innerText = "Vai ser buchuda?";
    } else if (a - b === 1 || b - a === 1) {
      under.innerText = "diferença de um ponto, cuidado com a carroça";
    } else if (a - b === 2 || b - a === 2) {
      under.innerText = "continue no foco!";
      console.log(a, b);
    } else if (a === 6 || b === 6) {
      console.log(a, b);
      under.innerText = "mais uma pra contagem!";
    }
  } else if (pontos.length === 3) {
    under.innerHTML = "<div></div>";
    const piu = document.createElement("div");
    piu.className = "piu";
    under.appendChild(piu);
  }
}
