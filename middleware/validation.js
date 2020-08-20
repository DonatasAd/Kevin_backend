const { db } = require('../controllers/index');

const validation = async (req, res, next) => {
  try {
    const { gameId } = req.tokenData;
    const { position, player } = req.body;
    if (db.length === 0) {
      throw new Error(`Database is empty please restart the game!`);
    }
    // Check if body has postion and player
    if (position === undefined || !player) {
      throw new Error(`Player and move position is required!`);
    }
    // check if position is between 0 to 8
    if (position > 8 || position < 0) {
      throw new Error(`Invalid possiton value must be in a range 0 to 8`);
    }
    // Check if palyer value is valid
    if (player !== 'X' && player !== 'O') {
      throw new Error(`Invalid player value must be 'X' or 'O'`);
    }
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
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = validation;
