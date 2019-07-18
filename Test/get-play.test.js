import { getRockPaperScissor } from '../get-play.js';

const test = QUnit.test;

QUnit.module('Rock Paper Scissors');

test('rock to equal less than 0.35', assert => {
    // Arrange
    const number = 0.24;
    const expected = 'rock';

    // Act
    const choice = getRockPaperScissor(number);


    // Assert
    assert.equal(choice, expected);
});
