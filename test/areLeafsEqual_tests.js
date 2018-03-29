const sut = require('../src/areLeafsEqual');

describe('Tree Recursor', () => {
    it('should return true when all simple leafs are equal', () => {
        const result = sut();
        expect(result).to.equal(true);
    });
});