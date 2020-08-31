const jwt = require('jsonwebtoken');
const calculateWinner = require('../helper/calculateWinner');
const db = [];

exports.db = db;

exports.all = (req, res, next) => {
  res.json(db);
};

exports.loadGame = (req, res, next) => {
  const { gameId } = req.tokenData;
  if (!db[gameId]) {
    const error = new Error(`Game with this id does not exist`);
    return next(error);
  }
  res.json(db[gameId]);
};

exports.startGame = (req, res, next) => {
  // add new game
  db.push({
    board: Array(9).fill(null),
    lastMove: null,
    logs: [],
    winner: null,
  });
  // Generate JWT token with game and starting player
  const gameId = db.length - 1;
  const startingPlayer = Math.random() >= 0.5 ? 'X' : 'O';
  const token = jwt.sign({ gameId }, 'sectret');
  res.json({ token, startingPlayer });
};

exports.makeMove = (req, res, next) => {
  const { gameId } = req.tokenData;
  const { position, player } = req.body;
  // Check can player make a move.
  if (db[gameId].lastMove === player) {
    throw new Error(`Player ${player} already made the move.`);
  }
  // Check if game has been finished
  if (db[gameId].winner) {
    throw new Error(`Game is finished, winner is ${player}`);
  }
  // Check if position is already marked
  if (db[gameId].board[position]) {
    throw new Error(`This position is already marked!`);
  }
  // Update game data
  db[gameId].board[position] = player;
  db[gameId].lastMove = player;
  db[gameId].logs.push(`Player ${player} has marked position ${position + 1}`);
  // Check and update game winner
  const winner = calculateWinner(db[gameId].board);
  db[gameId].winner = winner;

  res.json(db[gameId]);
};
