/**
 *
 *
 * @export
 * @interface IEquatable
 * @template T
 */
export interface IEquatable<T> {
    /**
     *
     *
     * @param {T} obj
     * @returns {boolean}
     * @memberof IEquatable
     */
    Equals(obj: T): boolean;
}

/**
 *
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {obj is IEquatable<T>}
 */
export function IsEquatable<T>(obj: any): obj is IEquatable<T> {
    return obj && typeof obj === 'object' && 'Equals' in obj && typeof obj.Equals === 'function';
}