import { getPercents } from '../../utils/getPercents.js';

describe('test function getPercents for count percent of number', () => {
    it('calculate 30 percent of 200 to equal 60', () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60);
    }),
    it('calculate 0 percent of 100 to equal 0', () => {
        const result = getPercents(0, 100);
        expect(result).toBe(0);
    }),
    it('calculate 0.1 percent of 100 to equal 0.1', () => {
        const result = getPercents(0.1, 100);
        expect(result).toBe(0.1);
    })
})