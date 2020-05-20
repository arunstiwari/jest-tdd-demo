const {sum, InvalidArgumentError, subtract} = require('./calculate');

test('2 +3 = 5', () => {
    const result = sum(2,3);
    expect(result).toBe(5);
})

test('3+5=8', () => {
    const result = sum(3,5);
    expect(result).toBe(8);
})

test("2 + c  throw an exception", () => {
    try {
        const result = sum(2, "c"); 
    } catch (e) {
        let isExpectedError = e instanceof InvalidArgumentError;
        console.log('===isExpectedError---',isExpectedError);
        expect(isExpectedError).toBeTruthy();
        expect(e.message).toBe('Argument should be number');
    }
});

test("a + c  throw an exception", () => {
  try {
    const result = sum("a", "c");
  } catch (e) {
      let isExpectedError = e instanceof InvalidArgumentError;
      console.log("===isExpectedError---", isExpectedError);
      expect(isExpectedError).toBeTruthy();
    expect(e.message).toBe("Argument should be number");
  }
});

test("a + 5  throw an exception", () => {
  try {
    const result = sum("a", 5);
  } catch (e) {
    expect(e.message).toBe("Argument should be number");
  }
});

test('5-2=3', () => {
    const result = subtract(5,2);
    expect(result).toBe(3);
})
