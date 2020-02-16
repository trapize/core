import { IAssembly } from './IAssembly';

/**
 *
 *
 * @export
 * @interface IModule
 */
export interface IModule {
    /**
     *
     *
     * @type {string}
     * @memberof IModule
     */
    name: string;
    /**
     *
     *
     * @type {IAssembly[]}
     * @memberof IModule
     */
    assemblies?: IAssembly[];
    /**
     *
     *
     * @type {IModule[]}
     * @memberof IModule
     */
    modules?: IModule[];
}