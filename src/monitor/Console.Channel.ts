import { injectable } from 'inversify';
import { ILogger } from './ILogger';

/**
 *
 *
 * @export
 * @class ConsoleChannel
 * @implements {ILogger}
 */
@injectable()
export class ConsoleChannel implements ILogger {
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ConsoleChannel
     */
    public Info(...args: any[]): void {
        console.info(...args);
    }
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ConsoleChannel
     */
    public Log(...args: any[]): void {
        console.log(...args);
    }
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ConsoleChannel
     */
    public Debug(...args: any[]): void {
        console.debug(...args);
    }
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ConsoleChannel
     */
    public Warn(...args: any[]): void {
        console.warn(...args);
    }
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ConsoleChannel
     */
    public Error(...args: any[]): void {
        console.error(...args);
    }
}