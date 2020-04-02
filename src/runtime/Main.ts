import { Container } from 'inversify';
import { IAppConfig } from '../configuration/IApp.Config';
import { Symbols } from '../Symbols';
import { IApplication } from '../IApplication';
import { IDependencyInjection } from './IDependency.Injection';
import { DependencyInjection } from './Dependency.Injection';

/**
 *
 *
 * @export
 * @param {string} root
 * @param {IAppConfig} config
 * @param {Container} [container=new Container()]
 * @returns {Promise<void>}
 */
export async function Main<T = any>(root: string, config: IAppConfig, container: Container = new Container()): Promise<T> {
    if(!container.isBound(Symbols.Configuration.IAppConfig)) {
        container.bind(Symbols.Configuration.IAppConfig).toConstantValue(config);
    }

    if(!container.isBound(Symbols.Configuration.Root)) {
        container.bind(Symbols.Configuration.Root).toConstantValue(root);
    }
    
    /* istanbul ignore next */
    if(!container.isBound(Symbols.Runtime.IDependencyInjection)) {
        container.bind(Symbols.Runtime.IDependencyInjection).toFunction(DependencyInjection);
    }
    
    container = await container.get<IDependencyInjection>(Symbols.Runtime.IDependencyInjection)(container, config, root);
    const application = container.get<IApplication<T>>(Symbols.IApplication);
    return application.Run(container);
}