import 'reflect-metadata';
import { Logger } from '../../src/monitor/Logger';

const channel = {
    Info: jest.fn(),
    Log: jest.fn(),
    Debug: jest.fn(),
    Warn: jest.fn(),
    Error: jest.fn()
};


describe('Logger', () => {
    it('Should call the channel', () => {
        const logger = new Logger([channel]);

        logger.Info('test');
        logger.Log('test');
        logger.Debug('test');
        logger.Warn('test');
        logger.Error('test');

        expect(channel.Info).toHaveBeenCalledTimes(1);
        expect(channel.Log).toHaveBeenCalledTimes(1);
        expect(channel.Debug).toHaveBeenCalledTimes(1);
        expect(channel.Warn).toHaveBeenCalledTimes(1);
        expect(channel.Error).toHaveBeenCalledTimes(1);
    })
})