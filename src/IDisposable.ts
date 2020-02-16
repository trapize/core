/**
 *
 *
 * @export
 * @interface IDisposable
 */
export interface IDisposable {
    /**
     *
     *
     * @memberof IDisposable
     */
    Dispose(): void;
}

/**
 *
 *
 * @export
 * @param {*} obj
 * @returns {obj is IDisposable}
 */
export function IsDisposable(obj: any): obj is IDisposable {
    return obj && typeof obj === 'object' && 'Dispose' in obj && typeof obj.Dispose === 'function';
}