import compareNumbers from '/src/compare.numbers.js';

const test = QUnit.test;

test('decides if number is above or below 7', (assert) => {
// Arrange
    const input = 7;
    const correct = 7;
    const expected = 0;

// Act
    const result = compareNumbers(input, correct);

// Assert
    assert.equal(result, expected);
});

export default compareNumbers;