import { Exception } from './Exception';

/**
 *
 *
 * @export
 * @class ValueException
 * @extends {Exception}
 */
export class ValueException extends Exception {
    /**
     *
     *
     * @protected
     * @type {string}
     * @memberof ValueException
     */
    protected _source: string;

    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @memberof ValueException
     */
    public constructor(source: string);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {string} message
     * @memberof ValueException
     */
    public constructor(source: string, message: string);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {string} message
     * @param {Exception} innerException
     * @memberof ValueException
     */
    public constructor(source: string, message: string, innerException: Exception);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {string} message
     * @param {{[key: string]: any}} data
     * @memberof ValueException
     */
    public constructor(source: string, message: string, data: {[key: string]: any});
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {string} message
     * @param {{[key: string]: any}} data
     * @param {Exception} innerException
     * @memberof ValueException
     */
    public constructor(source: string, message: string, data: {[key: string]: any}, innerException: Exception);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {{[key: string]: any}} data
     * @memberof ValueException
     */
    public constructor(source: string, data: {[key: string]: any});
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {Exception} innerException
     * @memberof ValueException
     */
    public constructor(source: string, innerException: Exception);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {{[key: string]: any}} data
     * @param {Exception} innerException
     * @memberof ValueException
     */
    public constructor(source: string, data: {[key: string]: any}, innerException: Exception);
    /**
     *Creates an instance of ValueException.
     * @param {string} source
     * @param {(string | Exception | {[key: string]: any})} [messageOrDataOrInner]
     * @param {(Exception | {[key: string]: any})} [innerOrData]
     * @param {Exception} [inner]
     * @memberof ValueException
     */
    public constructor(source: string, messageOrDataOrInner?: string | Exception | {[key: string]: any}, innerOrData?: Exception | {[key: string]: any}, inner?: Exception);
    public constructor(source: string, messageOrDataOrInner?: string | Exception | {[key: string]: any}, innerOrData?: Exception | {[key: string]: any}, inner?: Exception) {
        super(messageOrDataOrInner, innerOrData, inner);
        this._source = source;
    }
} 