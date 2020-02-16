import { IAppConfig } from '../configuration/IApp.Config';
import { Container } from 'inversify';
import { ModuleResolver } from './Module.Resolver';
import { AssemblyResolver } from './Assembly.Resolver';
import { Importer } from './Importer';

/* istanbul ignore next */
/**
 *
 *
 * @export
 * @param {Container} [container=new Container()]
 * @param {IAppConfig} config
 * @param {string} root
 * @returns {Promise<Container>}
 */
export async function DependencyInjection(container: Container = new Container(), config: IAppConfig, root: string): Promise<Container> {
    const moduleResolver = new ModuleResolver(root, new AssemblyResolver(new Importer()));
    for(let i = 0; i < config.modules.length; i++) {
        await moduleResolver.Resolve(container, config.modules[i]);
    }
    return container;
}