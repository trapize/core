import { ValueException } from '../exceptions/Value.Exceptionts';

/**
 *
 *
 * @export
 * @class Numbers
 */
export class Numbers {
    /**
     *
     *
     * @static
     * @param {string} str
     * @returns {number}
     * @memberof Numbers
     */
    public static ToInt(str: string): number {
        const v = parseInt(str, 10);
        if(isNaN(v)) {
            throw new ValueException('Core', 'Invalid Number');
        }
        return v;
    }

    /**
     *
     *
     * @static
     * @param {string} str
     * @returns {(number | undefined)}
     * @memberof Numbers
     */
    public static TryToInt(str: string): number | undefined {
        const v = parseInt(str, 10);
        return isNaN(v) ? undefined : v;
    }

    /**
     *
     *
     * @static
     * @param {string} str
     * @returns {(number | undefined)}
     * @memberof Numbers
     */
    public static TryToFloat(str: string): number | undefined {
        const v = parseFloat(str);
        return isNaN(v) ? undefined : v;
    }
}