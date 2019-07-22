import { getRockPaperScissor } from '../src/getplay.js';

const test = QUnit.test;

QUnit.module('Rock Paper Scissors');

test('rock = 0', assert => {
    // Arrange
    const number = 0;
    const expected = 'rock';

    // Act
    const choice = getRockPaperScissor(number);

    // Assert
    assert.equal(choice, expected);
});
