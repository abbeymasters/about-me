import compareNumbers from './compare-numbers.js';

const test = QUnit.test;

test('decides if number is above or below 7', (assert) => {
// Arrange
    const input = 7;
    const expected = true;

// Act
    const result = compareNumbers(input);

// Assert
    assert.equal(result, expected);
});