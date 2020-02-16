import { Container } from 'inversify';
import { IModule } from './IModule';

/**
 *
 *
 * @export
 * @interface IModuleResolver
 */
export interface IModuleResolver {
    /**
     *
     *
     * @param {Container} container
     * @param {IModule} module
     * @returns {Promise<void>}
     * @memberof IModuleResolver
     */
    Resolve(container: Container, module: IModule): Promise<void>;
}