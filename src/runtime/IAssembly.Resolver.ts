import { Container, interfaces } from 'inversify';
import { IAssembly } from './IAssembly';

/**
 *
 *
 * @export
 * @interface IAssemblyResolver
 */
export interface IAssemblyResolver {
    /**
     *
     *
     * @param {string} root
     * @param {Container} container
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof IAssemblyResolver
     */
    Resolve(root: string, container: Container, assembly: IAssembly): Promise<void>;
    /**
     *
     *
     * @param {string} root
     * @param {interfaces.Bind} bind
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof IAssemblyResolver
     */
    Resolve(root: string, bind: interfaces.Bind, assembly: IAssembly): Promise<void>;
}