import { injectable } from 'inversify';
import { IMemoryCacheFactory } from './IMemory.Cache.Factory';
import { IMemoryCache } from './IMemory.Cache';
import NodeCache from 'node-cache';

/**
 *
 *
 * @export
 * @class MemoryCacheFactory
 * @implements {IMemoryCacheFactory}
 */
@injectable()
export class MemoryCacheFactory implements IMemoryCacheFactory {
    /**
     *
     *
     * @param {*} options
     * @returns {IMemoryCache}
     * @memberof MemoryCacheFactory
     */
    public Create(options: any): IMemoryCache {
        return <IMemoryCache>new NodeCache(options);
    }
}