import { IModule } from '../runtime/IModule';
import NodeCache from 'node-cache';

/**
 * Configuration data for the application
 *
 * @export
 * @interface IAppConfig
 */
export interface IAppConfig {
    modules: IModule[];
    /**
     *
     *
     * @type {number}
     * @memberof IAppConfig
     */
    port?: number;
    
    /**
     *
     *
     * @type {{
     *         connection: string;
     *     }}
     * @memberof IAppConfig
     */
    schema: {
        connection: string;
    },
    /**
     *
     *
     * @type {NodeCache.Options}
     * @memberof IAppConfig
     */
    cacheOptions: NodeCache.Options;
    /**
     *
     *
     * @type {NodeCache.Options}
     * @memberof IAppConfig
     */
    authenticationCacheOptions: NodeCache.Options;
}