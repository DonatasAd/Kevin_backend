const assert = require('assert');
const calculateWinner = require('../helper/calculateWinner');

describe('calculateWinner()', function () {
  it('should return winner player X', function () {
    const winner = calculateWinner(['X', 'X', 'X', null, null, null, null, null, null]);
    assert.equal(winner, 'X');
  });
  it('should return null', function () {
    const winner = calculateWinner(['X', 'X', null, null, null, null, null, null, null]);
    assert.equal(winner, null);
  });
  it('should return Winner O', function () {
    const winner = calculateWinner([null, null, 'O', null, 'O', null, 'O', null, null]);
    assert.equal(winner, 'O');
  });
  it('should return Draw', function () {
    const winner = calculateWinner(['O', 'X', 'O', 'X', 'O', 'O', 'X', 'O', 'X']);
    assert.equal(winner, 'Draw');
  });
});
