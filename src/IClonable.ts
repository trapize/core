/**
 *
 *
 * @export
 * @interface IClonable
 * @template T
 */
export interface IClonable<T> {
    /**
     *
     *
     * @returns {T}
     * @memberof IClonable
     */
    Clone(): T;
}

/**
 *
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {obj is IClonable<T>}
 */
export function IsClonable<T>(obj: any): obj is IClonable<T> {
    return obj && typeof obj === 'object' && 'Clone' in obj && typeof obj.Clone === 'function';
}