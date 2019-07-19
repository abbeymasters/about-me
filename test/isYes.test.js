import isYes from '/src/isYes.js'; 

const test = QUnit.test;

test('abbey', function(assert) {
// Arrange
// Set up your parameters and expectations

    const text = 'kabir';
    const expected = false;

// Act
// Call the function you’re testing and set the result to a const

    const result = isYes(text);

// Assert
    assert.equal(result, expected); 
});
