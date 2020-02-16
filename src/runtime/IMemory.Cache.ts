/**
 *
 *
 * @export
 * @interface IMemoryCache
 */
export interface IMemoryCache {
    /**
     *
     *
     * @param {string} key
     * @param {*} value
     * @memberof IMemoryCache
     */
    set(key: string, value: any): void;
    /**
     *
     *
     * @template T
     * @param {string} key
     * @returns {T}
     * @memberof IMemoryCache
     */
    get<T>(key: string): T;
    /**
     *
     *
     * @param {string} key
     * @param {number} ttl
     * @memberof IMemoryCache
     */
    ttl(key: string, ttl: number): void;
}