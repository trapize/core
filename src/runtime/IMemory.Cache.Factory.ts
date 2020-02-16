import { IMemoryCache } from './IMemory.Cache';

/**
 *
 *
 * @export
 * @interface IMemoryCacheFactory
 */
export interface IMemoryCacheFactory {
    /**
     *
     *
     * @param {*} options
     * @returns {IMemoryCache}
     * @memberof IMemoryCacheFactory
     */
    Create(options: any): IMemoryCache;
}