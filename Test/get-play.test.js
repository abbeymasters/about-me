import { getRockPaperScissor } from '/../src/get-play.js';

const test = QUnit.test;

QUnit.module('Rock Paper Scissors');

test('rock = 0', assert => {
    // Arrange
    const number = 1;
    const expected = 'paper';

    // Act
    const choice = getRockPaperScissor(number);

    // Assert
    assert.equal(choice, expected);
});
