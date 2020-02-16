import 'reflect-metadata';
import { MemoryCacheFactory } from '../../src/runtime/Memory.Cache.Factory';
import NodeCache from 'node-cache';

describe('Memory Cache Factory', () => {
    it('Should create a memory cache', () => {
        const cache = new MemoryCacheFactory().Create({});
        expect(cache).toBeDefined();
        expect(cache).toBeInstanceOf(NodeCache);
    });
});