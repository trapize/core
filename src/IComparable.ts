/**
 *
 *
 * @export
 * @interface IComparable
 * @template T
 */
export interface IComparable<T> {
    /**
     *
     *
     * @param {T} that
     * @returns {number}
     * @memberof IComparable
     */
    CompareTo(that: T): number;
}

/**
 *
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {obj is IComparable<T>}
 */
export function IsComparable<T>(obj: any): obj is IComparable<T> {
    return obj && typeof obj === 'object' && 'CompareTo' in obj && typeof obj.CompareTo === 'function';
}