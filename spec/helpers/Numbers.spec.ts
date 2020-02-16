import 'reflect-metadata';
import { Numbers } from '../../src/helpers';

describe('Helpers - Numbers', () => {
    it('Should throw an error', () => {
        let error: Error | undefined = undefined;
        try {
            Numbers.ToInt('notanumber');
        } catch(e) {
            error = e;
        }
        expect(error).toBeDefined();
    });

    it('Should parse Int', () => {
        const int = Numbers.ToInt('15');
        expect(int).toBe(15);
    });

    it('Should safely parse', () => {
        expect(Numbers.TryToInt('15')).toBe(15);
        expect(Numbers.TryToInt('15a')).toBe(15);
        expect(Numbers.TryToInt('notanumber')).toBeUndefined();

        expect(Numbers.TryToFloat('15.5')).toBe(15.5);
        expect(Numbers.TryToFloat('15a')).toBe(15);
        expect(Numbers.TryToFloat('notanumber')).toBeUndefined();
    });
})