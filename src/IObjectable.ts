/**
 *
 *
 * @export
 * @interface IObjectable
 */
export interface IObjectable {
    /**
     *
     *
     * @returns {{[key: string]: any}}
     * @memberof IObjectable
     */
    ToJSON(): {[key: string]: any};
}

/**
 *
 *
 * @export
 * @param {*} obj
 * @returns {obj is IObjectable}
 */
export function IsObjectable(obj: any): obj is IObjectable {
    return obj && typeof obj === 'object' && 'ToJSON' in obj && typeof obj.ToJSON === 'function';
}