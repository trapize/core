import 'reflect-metadata';
import { Strings } from '../../src/helpers/Strings';

describe('Strings helper methods', () => {
    it('should convert to Snake', () => {
        expect(Strings.CamelToSnake('thisShouldBeSnake')).toBe('this_should_be_snake');
    });

    it('should convert to camel', () => {
        expect(Strings.SnakeToCamel('this_should_be_camel')).toBe('thisShouldBeCamel');
    });

    it('Should lower case the first', () => {
        expect(Strings.LowerFirst('ThisShouldBeLowered')).toBe('thisShouldBeLowered');
    });
})