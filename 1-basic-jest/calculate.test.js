const {sum, subtract} = require('./calculate');

test('2 +3 = 5', () => {
    const result = sum(2,3);
    expect(result).toBe(5);
})

test('3+5=8', () => {
    const result = sum(3,5);
    expect(result).toBe(8);
})

test('5-2=3', () => {
    const result = subtract(5,2);
    expect(result).toBe(3);
})