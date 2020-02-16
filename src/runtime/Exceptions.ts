import { Exception } from '../exceptions/Exception';

/**
 *
 *
 * @export
 * @class RuntimeException
 * @extends {Exception}
 */
export class RuntimeException extends Exception {
    /**
     *
     *
     * @type {string}
     * @memberof RuntimeException
     */
    public _source: string = 'Core.Runtime';
}

/**
 *
 *
 * @export
 * @class InvalidAssmeblyPathException
 * @extends {RuntimeException}
 */
export class InvalidAssmeblyPathException extends RuntimeException {}

export const RuntimeExceptions = {
    InvalidAssmeblyPathException: InvalidAssmeblyPathException
}