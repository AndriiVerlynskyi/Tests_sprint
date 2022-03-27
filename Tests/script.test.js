const { funcA, funcB } = require('../script');


test("Func A should return sum of 3 calculates, made by n*(n+1)*2n formula", () => {
    expect(funcA(3)).toEqual(100)
});

test(`Func B should return 3 for array [ 1, 2, 3, 5, 8, 13], that's the amount of mamabers that correspond 
condition`, () => {
    expect(funcB([ 1, 2, 3, 5, 8, 13]) ).toEqual(3)
});
test(`Func B should return 3 for array [ 1, 2, 4, 8, 16, 32], that's the amount of mamabers that correspond 
condition`, () => {
    expect(funcB([ 1, 2, 4, 8, 16, 32]) ).toEqual(4)
})