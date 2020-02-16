import { injectable, multiInject } from 'inversify';
import { ILogger } from './ILogger';
import { Symbols } from '../Symbols';

/**
 *
 *
 * @export
 * @class Logger
 * @implements {ILogger}
 */
@injectable()
export class Logger implements ILogger {
    /**
     *Creates an instance of Logger.
     * @param {ILogger[]} channels
     * @memberof Logger
     */
    public constructor(@multiInject(Symbols.Monitor.LogChannels) private channels: ILogger[]) {}

    /**
     *
     *
     * @param {...any[]} args
     * @memberof Logger
     */
    public Info(...args: any[]): void {
        this.channels.forEach(channel => channel.Info(...args));
    }

    /**
     *
     *
     * @param {...any[]} args
     * @memberof Logger
     */
    public Log(...args: any[]): void {
        this.channels.forEach(channel => channel.Log(...args));
    }

    /**
     *
     *
     * @param {...any[]} args
     * @memberof Logger
     */
    public Debug(...args: any[]): void {
        this.channels.forEach(channel => channel.Debug(...args));
    }

    /**
     *
     *
     * @param {...any[]} args
     * @memberof Logger
     */
    public Warn(...args: any[]): void {
        this.channels.forEach(channel => channel.Warn(...args));
    }
    
    /**
     *
     *
     * @param {...any[]} args
     * @memberof Logger
     */
    public Error(...args: any[]): void {
        this.channels.forEach(channel => channel.Error(...args));
    }
}