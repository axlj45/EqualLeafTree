const sut = require('../src/areLeafsEqual');

const passingSimpleTree = require('./test_data/passingSimpleTree');
const passingComplexTree = require('./test_data/passingComplexTree');
const failingSimpleTree = require('./test_data/failingSimpleTree');
const failingComplexTree = require('./test_data/failingComplexTree');
const emptyTree = {};

describe('Tree Recursor', () => {
    it('should return true when all simple tree leafs are equal', () => {
        const result = sut(passingSimpleTree);
        expect(result.leafsAreEqual).to.equal(true);
    });

    it('should return false when any simple tree leaf is different', () => {
        const result = sut(failingSimpleTree);
        expect(result.leafsAreEqual).to.equal(false);
    });

    it('should return true when every complex tree leaf is equal', () => {
        const result = sut(passingComplexTree);
        expect(result.leafsAreEqual).to.equal(true);
    });

    it('should return false when any complex tree leaf is different', () => {
        const result = sut(failingComplexTree);
        expect(result.leafsAreEqual).to.equal(false);
    });

    it('should return undefined if it has no children', () => {
        const result = sut(emptyTree);
        expect(result).to.be.undefined;
    });
});