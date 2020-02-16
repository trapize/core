import 'reflect-metadata';
import { ConsoleChannel } from '../../src/monitor/Console.Channel';

console.info = jest.fn();
console.log = jest.fn();
console.debug = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();

describe('Console Channel', () => {
    it('Should call the console functions', () => {
        const channel = new ConsoleChannel();
        channel.Info('test');
        channel.Log('test');
        channel.Debug('test');
        channel.Warn('test');
        channel.Error('test');

        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledTimes(1);
    });
});