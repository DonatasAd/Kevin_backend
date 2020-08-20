function calculateWinner(board) {
  const possibleWins = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Cross
    [0, 4, 8],
    [2, 4, 6],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  // Check for a victory
  for (let combination of possibleWins) {
    const [a, b, c] = combination;
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  // check for a Draw
  const boardIsFull = !board.some((el) => {
    return el === null;
  });
  if (boardIsFull) {
    return 'Draw';
  }
  return null;
}

module.exports = calculateWinner;
