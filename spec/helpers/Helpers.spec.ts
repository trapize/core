import 'reflect-metadata';
import { RemoveUndefines, Dedupe, lowerFirst } from '../../src/helpers';

describe('Helpers test', () => {
    it('Should remove undefineds', () => {
        const result = RemoveUndefines({
            a: 1,
            b: '2',
            c: null,
            d: undefined
        });

        expect(result.a).toBe(1);
        expect(result.b).toBe('2');
        expect(result.c).toBeNull();
        expect(result.d).toBeUndefined();
        expect((<Object>result).hasOwnProperty('d')).toBeFalsy();

        expect(RemoveUndefines(null)).toBeNull();
    });

    it('Should remove duplicates', () => {
        const result = Dedupe([
            '1','2','3','3','4','5','6','4','4'
        ]);
        expect(result).toHaveLength(6);
        expect(result[0]).toBe('1');
        expect(result[1]).toBe('2');
        expect(result[2]).toBe('3');
        expect(result[3]).toBe('4');
        expect(result[4]).toBe('5');
        expect(result[5]).toBe('6');
    });

    it('Should lower the first character', () => {
        expect(lowerFirst('ABC')).toBe('aBC');
        expect(lowerFirst('aBC')).toBe('aBC');
        expect(lowerFirst('AbCdEfG')).toBe('abCdEfG');
    });
});