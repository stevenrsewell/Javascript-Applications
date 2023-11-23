const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const restartBtn = document.getElementById('restart-btn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleCellClick = (clickedCellEvent) => {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
};

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerText = currentPlayer;
};

const handleResultValidation = () => {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    const val1 = gameState[a];
    const val2 = gameState[b];
    const val3 = gameState[c];
    if (val1 === '' || val2 === '' || val3 === '') {
      continue;
    }
    if (val1 === val2 && val2 === val3) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameActive = false;
    gameStatus.innerText = `Player ${currentPlayer} has won!`;
    return;
  }

  let roundDraw = !gameState.includes('');
  if (roundDraw) {
    gameActive = false;
    gameStatus.innerText = 'It\'s a draw!';
    return;
  }

  changePlayer();
};

const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const handleRestartGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameStatus.innerText = '';
  cells.forEach((cell) => {
    cell.innerText = '';
  });
};

cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', handleRestartGame);
