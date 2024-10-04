const mathUtils = require('./mathUtils');

test('add numbers correctly', () =>{
    expect(mathUtils.add(2, 3)).toBe(5);
});

test('add numbers correctly', () =>{
    expect(mathUtils.add(0, 5)).toBe(5);
});

test('add numbers correctly', () =>{
    expect(mathUtils.add(-2, 3)).toBe(1);
});