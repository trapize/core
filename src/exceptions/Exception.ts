import { IObjectable } from '../IObjectable';

/**
 *
 *
 * @export
 * @abstract
 * @class Exception
 * @implements {IObjectable}
 */
export abstract class Exception implements IObjectable {

    /**
     *
     *
     * @protected
     * @abstract
     * @type {string}
     * @memberof Exception
     */
    protected abstract _source?: string;

    /**
     *
     *
     * @protected
     * @type {number}
     * @memberof Exception
     */
    protected _code: number = 500;

    /**
     *
     *
     * @protected
     * @type {{[key:string]: any}}
     * @memberof Exception
     */
    protected _data?: {[key:string]: any};
    /**
     *
     *
     * @protected
     * @type {Exception}
     * @memberof Exception
     */
    protected _innerException?: Exception;
    /**
     *
     *
     * @protected
     * @type {string}
     * @memberof Exception
     */
    protected _message?: string;
    /**
     *
     *
     * @protected
     * @type {string}
     * @memberof Exception
     */
    protected _stack?: string;

    /**
     *Creates an instance of Exception.
     * @memberof Exception
     */
    public constructor();
    /**
     *Creates an instance of Exception.
     * @param {string} message
     * @memberof Exception
     */
    public constructor(message: string);
    /**
     *Creates an instance of Exception.
     * @param {string} message
     * @param {Exception} innerException
     * @memberof Exception
     */
    public constructor(message: string, innerException: Exception);
    /**
     *Creates an instance of Exception.
     * @param {string} message
     * @param {{[key: string]: any}} data
     * @memberof Exception
     */
    public constructor(message: string, data: {[key: string]: any});
    /**
     *Creates an instance of Exception.
     * @param {string} message
     * @param {{[key: string]: any}} data
     * @param {Exception} innerException
     * @memberof Exception
     */
    public constructor(message: string, data: {[key: string]: any}, innerException: Exception);
    /**
     *Creates an instance of Exception.
     * @param {{[key: string]: any}} data
     * @memberof Exception
     */
    public constructor(data: {[key: string]: any});
    /**
     *Creates an instance of Exception.
     * @param {Exception} innerException
     * @memberof Exception
     */
    public constructor(innerException: Exception);
    /**
     *Creates an instance of Exception.
     * @param {{[key: string]: any}} data
     * @param {Exception} innerException
     * @memberof Exception
     */
    public constructor(data: {[key: string]: any}, innerException: Exception);
    /**
     *Creates an instance of Exception.
     * @param {(string | Exception | {[key: string]: any})} [messageOrDataOrInner]
     * @param {(Exception | {[key: string]: any})} [innerOrData]
     * @param {Exception} [inner]
     * @memberof Exception
     */
    public constructor(messageOrDataOrInner?: string | Exception | {[key: string]: any}, innerOrData?: Exception | {[key: string]: any}, inner?: Exception);
    public constructor(messageOrDataOrInner?: string | Exception | {[key: string]: any}, innerOrData?: Exception | {[key: string]: any}, inner?: Exception) {
        this._message = typeof messageOrDataOrInner === 'string' ? messageOrDataOrInner : undefined;
        this._innerException = messageOrDataOrInner instanceof Exception ? messageOrDataOrInner : innerOrData instanceof Exception ? innerOrData : inner;
        this._data = typeof messageOrDataOrInner !== 'string' && !(messageOrDataOrInner instanceof Exception) ? messageOrDataOrInner : innerOrData instanceof Exception ? undefined : innerOrData;
        this._stack = new Error().stack;
    }

    /**
     *
     *
     * @readonly
     * @type {number}
     * @memberof Exception
     */
    public get Code(): number {
        return this._code;
    }

    /**
     *
     *
     * @readonly
     * @type {{[key: string]: any}}
     * @memberof Exception
     */
    public get Data(): {[key: string]: any} {
        if(!this._data) {
            this._data = {};
        }
        return this._data;
    }

    /**
     *
     *
     * @readonly
     * @type {(Exception | undefined)}
     * @memberof Exception
     */
    public get InnerException(): Exception | undefined {
        return this._innerException;
    }

    /**
     *
     *
     * @readonly
     * @type {(string | undefined)}
     * @memberof Exception
     */
    public get Message(): string | undefined {
        return this._message;
    }

    /**
     *
     *
     * @readonly
     * @type {(string | undefined)}
     * @memberof Exception
     */
    public get Source(): string | undefined {
        return this._source;
    }

    /**
     *
     *
     * @readonly
     * @type {string}
     * @memberof Exception
     */
    public get Stack(): string {
        return this._stack || '';
    }

    /**
     *
     *
     * @readonly
     * @type {Function}
     * @memberof Exception
     */
    public get Constructor(): Function {
        return Object.getPrototypeOf(this).constructor;
    }

    /**
     *
     *
     * @readonly
     * @type {string}
     * @memberof Exception
     */
    public get Name(): string {
        return this.Constructor.name;
    }

    /**
     *
     *
     * @returns {{[key: string]: any}}
     * @memberof Exception
     */
    public ToJSON(): {[key: string]: any} {
        return {
            code: this._code,
            error: {
                message: this.Message,
                inner: this.InnerException ? this.InnerException.ToJSON() : undefined,
                data: this.Data
            }
        }
    }

    /**
     *
     *
     * @returns {{[key: string]: any}}
     * @memberof Exception
     */
    public ToInternalJSON(): {[key: string]: any} {
        return {
            code: this._code,
            error: {
                message: this.Message,
                inner: this.InnerException ? this.InnerException.ToJSON() : undefined,
                data: this.Data,
                name: this.Name,
                stack: this.Stack,
                source: this.Source,
            }
        };
    }
}