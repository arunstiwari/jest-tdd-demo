test('2+2 = 4', () => {
    expect(2+2).toBe(4);
})

test('testing object equality', () => {
    const data = {one: 1};
    expect(data).toEqual({one: 1});
})


test('testing object equality -2', () => {
    const data = {one: 1};
    data["two"] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

//asserting not case
test('adding positive numbers is not zero', () => {
    expect(5+3).not.toBe(0);
})

//testing the nullability
test('nullability test', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
})

//matching regex pattern
test('there is no I in word team', () => {
    expect("team").not.toMatch(/I/);
})

test('there is "stop" in Christopher',() => {
    expect('Christopher').toMatch(/stop/);
})

const shoppingList = [
    "soap",
    "toothpaste",
    "pencils"
];

test('shopping list has pencils in it', () => {
    expect(shoppingList).toContain("pencils");
})


//testing error scenarios
class ConfigError extends Error {}

function fetchData(){
    throw new ConfigError("Network is down");
}

test('fetchData throws error', () => {
    expect(fetchData).toThrow();
    expect(fetchData).toThrow(ConfigError);
    expect(fetchData).toThrow("Network is down");
    expect(fetchData).toThrow(/down/);

})
