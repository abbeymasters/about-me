import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('decides if number is equal to 7', (assert) => {
// Arrange
    const input = 7;
    const correct = 7;
    const expected = 0;

// Act
    const result = compareNumbers(input, correct);

// Assert
    assert.equal(result, expected);
});

test('decides if number is above 7', (assert) => {
// Arrange
    const input = 10;
    const correct = 7;
    const expected = 1;

// Act
    const result = compareNumbers(input, correct);

// Assert
    assert.equal(result, expected);
});

test('decides if number is below 7', (assert) => {
// Arrange
    const input = 5;
    const correct = 7;
    const expected = -1;

// Act
    const result = compareNumbers(input, correct);

// Assert
    assert.equal(result, expected);
});