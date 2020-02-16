import 'reflect-metadata';
import { injectable, Container } from 'inversify';
import { ModuleResolver } from '../../src/runtime/Module.Resolver';
import { IModule } from '../../src/runtime/IModule';

const assemblyResolve = {
    Resolve: jest.fn().mockImplementation(() => {
        return Promise.resolve();
    })
}

@injectable()
class InjectableClass {}

beforeEach(() => {
    assemblyResolve.Resolve.mockClear();
});

describe('Module Resolver', () => {
    it('Should resolve each', async () => {
        const mod: IModule = {
            name: 'Super',
            assemblies: [
                {
                    type: InjectableClass
                }
            ],
            modules: [
                {
                    name: 'Child',
                    assemblies: [
                        {
                            type: InjectableClass
                        }
                    ]
                }
            ]
        };

        const moduleResolver = new ModuleResolver('root', assemblyResolve);
        await moduleResolver.Resolve(new Container(), mod);
        expect(assemblyResolve.Resolve).toHaveBeenCalledTimes(2);
    });
})