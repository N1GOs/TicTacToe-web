const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');
let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            status.textContent = `Игрок ${currentPlayer} выиграл!`;
            gameOver = true;
            setTimeout(() => {
                resetGame();
            }, 3000); // Начать новую игру через 3 секунды
            break;
        }
    }

    if (!gameOver && Array.from(cells).every(cell => cell.textContent)) {
        status.textContent = 'Ничья!';
        gameOver = true;
        setTimeout(() => {
            resetGame();
        }, 3000); // Начать новую игру через 3 секунды
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    status.textContent = 'Ход игрока X';
    currentPlayer = 'X';
    gameOver = false;
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = currentPlayer;
            checkWinner();
            if (!gameOver) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Ход игрока ${currentPlayer}`;
            }
        }
    });
});
