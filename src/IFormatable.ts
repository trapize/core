/**
 *
 *
 * @export
 * @interface IFormatable
 */
export interface IFormatable {
    /**
     *
     *
     * @returns {string}
     * @memberof IFormatable
     */
    ToString(): string;
}

/**
 *
 *
 * @export
 * @param {*} obj
 * @returns {obj is IFormatable}
 */
export function IsFormatable(obj: any): obj is IFormatable {
    return obj && typeof obj === 'object' && 'ToString' in obj && typeof obj.ToString === 'function';
}