import { IModuleResolver } from './IModule.Resolver';
import { Container, AsyncContainerModule } from 'inversify';
import { IModule } from './IModule';
import { IAssemblyResolver } from './IAssembly.Resolver';

/**
 *
 *
 * @export
 * @class ModuleResolver
 * @implements {IModuleResolver}
 */
export class ModuleResolver implements IModuleResolver {
    /**
     *Creates an instance of ModuleResolver.
     * @param {string} root
     * @param {IAssemblyResolver} assemblyResolver
     * @memberof ModuleResolver
     */
    public constructor(
        private root: string,
        private assemblyResolver: IAssemblyResolver
    ) {}

    /**
     *
     *
     * @param {Container} container
     * @param {IModule} mod
     * @returns {Promise<void>}
     * @memberof ModuleResolver
     */
    public async Resolve(container: Container , mod: IModule): Promise<void> {
        const containerModule = new AsyncContainerModule((async bind => {
            await this.ForEach(mod.assemblies, async a => this.assemblyResolver.Resolve(this.root, bind, a));
            await this.ForEach(mod.modules, async m => this.Resolve(container, m));
        }));

        return container.loadAsync(containerModule);
    }

    /**
     *
     *
     * @private
     * @param {any[]} [array=[]]
     * @param {(val: any) => Promise<void>} callback
     * @returns {Promise<void>}
     * @memberof ModuleResolver
     */
    private async ForEach(array: any[] = [], callback: (val: any) => Promise<void>): Promise<void> {
        for(let i = 0; i< array.length; i++) 
        {
            await callback(array[i]);
        }
    }
}