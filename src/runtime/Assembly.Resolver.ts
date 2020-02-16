import { IAssembly } from './IAssembly';
import { IAssemblyResolver } from './IAssembly.Resolver';
import { Container, interfaces } from 'inversify';
import * as Path from 'path';
import { IImporter } from './IImporter';
import { RuntimeExceptions } from './Exceptions';

/**
 *
 *
 * @interface IScopable
 */
interface IScopable {
    /**
     *
     *
     * @memberof IScopable
     */
    inSingletonScope: () => void;
    /**
     *
     *
     * @memberof IScopable
     */
    inRequestScope: () => void;
    /**
     *
     *
     * @memberof IScopable
     */
    inTransientScope: () => void;
}

/**
 *
 *
 * @param {*} obj
 * @returns {obj is IScopable}
 */
function isScopable(obj: any): obj is IScopable {
    return obj && typeof obj === 'object' && 'inSingletonScope' in obj && 'inRequestScope' in obj && 'inTransientScope' in obj;
}

/**
 *
 *
 * @export
 * @class AssemblyResolver
 * @implements {IAssemblyResolver}
 */
export class AssemblyResolver implements IAssemblyResolver {

    /**
     *Creates an instance of AssemblyResolver.
     * @param {IImporter} importer
     * @memberof AssemblyResolver
     */
    public constructor(private importer: IImporter) {}

    /**
     *
     *
     * @param {string} root
     * @param {Container} container
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof AssemblyResolver
     */
    public async Resolve(root: string, container: Container, assembly: IAssembly): Promise<void>;
    /**
     *
     *
     * @param {string} root
     * @param {interfaces.Bind} bind
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof AssemblyResolver
     */
    public async Resolve(root: string, bind: interfaces.Bind, assembly: IAssembly): Promise<void>;
    /**
     *
     *
     * @param {string} root
     * @param {(Container | interfaces.Bind)} containerOrBind
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof AssemblyResolver
     */
    public async Resolve(root: string, containerOrBind: Container | interfaces.Bind, assembly: IAssembly): Promise<void> {
        return this.ResolveBind(root, containerOrBind instanceof Container ? (item: any) => containerOrBind.bind(item) : containerOrBind, assembly);
    }

    /**
     *
     *
     * @private
     * @param {string} root
     * @param {interfaces.Bind} bind
     * @param {IAssembly} assembly
     * @returns {Promise<void>}
     * @memberof AssemblyResolver
     */
    private async ResolveBind(root: string, bind: interfaces.Bind, assembly: IAssembly): Promise<void> {
        const item = typeof assembly.type === 'string' ? await this.Load(root, assembly) : assembly.type;
        const injectAs = !assembly.injectAs ? assembly.type : typeof assembly.injectAs === 'symbol' ? assembly.injectAs : Symbol.for(assembly.injectAs);
        let binding: any;
        if(item === injectAs) {
            binding = bind(item).toSelf();
        }
        else {
            switch(assembly.binding) {
                case 'CONSTANT': {
                    binding = bind(injectAs).toConstantValue(item);
                    break;
                }
                case 'AUTOFACTORY': {
                    binding = bind(injectAs).toAutoFactory(item);
                    break;
                }
                case 'FACTORY': {
                    binding = bind(injectAs).toFactory(item);
                    break;
                }
                case 'FUNCTION': {
                    binding = bind(injectAs).toFunction(item);
                    break;
                }
                default: {
                    binding = bind(injectAs).to(item);
                    break;
                }
            }
        }
        if(isScopable(binding)) {
            switch(assembly.scope) {
                case 'SINGLETON': {
                    binding.inSingletonScope();
                    break;
                }
                case 'TRANSIENT': {
                    binding.inTransientScope();
                    break;
                }
                case 'REQUEST':
                default: {
                    binding.inRequestScope();
                }
            }
        }
    }

    /**
     *
     *
     * @private
     * @param {string} root
     * @param {IAssembly} assembly
     * @returns {Promise<any>}
     * @memberof AssemblyResolver
     */
    private async Load(root: string, assembly: IAssembly): Promise<any> {
        if(assembly.file) {
            return this.LoadFile(root, assembly);
        }
        else 
        {
            return this.LoadModule(assembly);
        }
    }

    /**
     *
     *
     * @private
     * @param {string} root
     * @param {IAssembly} assembly
     * @returns {Promise<any>}
     * @memberof AssemblyResolver
     */
    private async LoadFile(root: string, assembly: IAssembly): Promise<any> {
        if(!assembly.path) {
            throw new RuntimeExceptions.InvalidAssmeblyPathException('Unknown path');
        }
        const path = Path.join(root, ...assembly.path.split(/\.|\/|\\/g), <string>assembly.file);
        const mod = await this.importer.import(path);
        return this.ExtractType(mod, assembly);
    }

    /**
     *
     *
     * @private
     * @param {IAssembly} assembly
     * @returns {Promise<any>}
     * @memberof AssemblyResolver
     */
    private async LoadModule(assembly: IAssembly): Promise<any> {
        if(!assembly.path) {
            throw new RuntimeExceptions.InvalidAssmeblyPathException('Unknown path');
        }
        const mod = await this.importer.import(assembly.path);
        return this.ExtractType(mod, assembly);
    }

    /**
     *
     *
     * @private
     * @param {*} mod
     * @param {IAssembly} assembly
     * @returns {Promise<any>}
     * @memberof AssemblyResolver
     */
    private async ExtractType(mod: any, assembly: IAssembly): Promise<any> {
        let innerMod: any;
        if(assembly.namespace) {
            innerMod = assembly.namespace.split(/\./).reduce((obj: any, key: string) => obj?.[key], mod);
        }
        else {
            innerMod = mod;
        }
        return assembly.type === 'default' ? innerMod : innerMod[assembly.type];
    }
}