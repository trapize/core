/**
 *
 *
 * @export
 * @interface ILogger
 */
export interface ILogger {
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ILogger
     */
    Info(...args: any[]): void;
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ILogger
     */
    Log(...args: any[]): void;
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ILogger
     */
    Debug(...args: any[]): void;
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ILogger
     */
    Warn(...args: any[]): void;
    /**
     *
     *
     * @param {...any[]} args
     * @memberof ILogger
     */
    Error(...args: any[]): void;
}