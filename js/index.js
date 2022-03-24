const elTitle = document.querySelector('.title');
const elUserScore = document.querySelector('#yourNum');
const elComputerScore = document.querySelector('#renNum');
const selectAllBtns = document.querySelectorAll('.btn-style');

let player = 0;
let computer = 0;

const data = {
  1: 'paper',
  2: 'rock',
  3: 'scissors',
};

const renderResult = (value) => {
  if (value === 'Draw') {
    return (elTitle.textContent = 'Draw');
  }

  if (value === 'Player') {
    player += 1;
    elUserScore.textContent = player;
    elTitle.textContent = 'Player';
  } else {
    computer += 1;
    elComputerScore.textContent = computer;
    elTitle.textContent = 'Computer';
  }
  maxResult();
};

const maxResult = () => {
  if (player == 5) {
      confirm('Your score is 5, you win!');
      player = 0;
      computer = 0;
      elComputerScore.textContent = computer;
      elUserScore.textContent = player;
  } else if(computer == 5) {
      confirm("Player's score is 5, you lose!");
      player = 0;
      computer = 0;
      elComputerScore.textContent = computer;
      elUserScore.textContent = player;
  }

}

const foundWin = (computer, player) => {
  if (player === computer) {
    return 'Draw';
  }

  //Rock
  if (player === 'rock') {
    if (computer === 'scissors') {
      return 'Player';
    } else {
      return 'Computer';
    }
  }

  //Paper
  if (player === 'paper') {
    if (computer === 'scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }

  //Scissors
  if (player === 'scissors') {
    if (computer === 'rock') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
};

const handelClickBtn = (evt) => {
  const computerChoice = Math.floor(Math.random() * 3 + 1).toString();
  const playerChoice = evt.currentTarget.value;

  const result = foundWin(data[computerChoice], data[playerChoice]);

  renderResult(result);
};

selectAllBtns.forEach((item) => {
  item.addEventListener('click', handelClickBtn);
});
