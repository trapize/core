import 'reflect-metadata';
import { IAssembly } from '../../src/runtime/IAssembly';
import { AssemblyResolver } from '../../src/runtime/Assembly.Resolver';
import * as Path from 'path';
import { Container, injectable } from 'inversify';

interface TestCase {
    assembly: IAssembly;
    path?: string;
    retPromise?: Promise<any>;
}

const root = 'root';

const importer = {
    import: jest.fn()
};

@injectable()
class InjectableClass {

}

const testCases: TestCase[] = [
    {
        assembly: {
            type: 'default',
            namespace: 'Request.MyRequest',
            injectAs: 'MyRequest',
            path: 'mysql'
        },
        path: 'mysql',
        retPromise: Promise.resolve({
            Request: {
                MyRequest: InjectableClass
            }
        })
    },
    {
        assembly: {
            type: 'value',
            injectAs: Symbol.for('InjectAs'),
            file: 'fileName',
            path: 'path',
            binding: 'CONSTANT'
        },
        path: Path.join(root, 'path/fileName'),
        retPromise: Promise.resolve({value:'CONSTANT'})
    },
    {
        assembly: {
            type: InjectableClass,
            injectAs: Symbol.for('InjectAs'),
            binding: 'AUTOFACTORY'
        }
    },
    {
        assembly: {
            type: () => new InjectableClass(),
            injectAs: Symbol.for('InjectAs'),
            binding: 'FACTORY'
        }
    },
    {
        assembly: {
            type: () => 10,
            injectAs: Symbol.for('InjectAs'),
            binding: 'FUNCTION'
        }
    },
    {
        assembly: {
            type: InjectableClass,
            injectAs: Symbol.for('InjectAs')
        }
    },
    {
        assembly: {
            type: InjectableClass,
            injectAs: 'InjectAs'
        }
    },
    {
        assembly: {
            type: InjectableClass
        }
    },
    {
        assembly: {
            type: InjectableClass,
            binding: 'NEWABLE'
        }
    },
    {
        assembly: {
            type: InjectableClass,
            binding: 'NEWABLE',
            scope: 'REQUEST'
        }
    },
    {
        assembly: {
            type: InjectableClass,
            binding: 'NEWABLE',
            scope: 'TRANSIENT'
        }
    },
    {
        assembly: {
            type: InjectableClass,
            binding: 'NEWABLE',
            scope: 'SINGLETON'
        }
    }
];
describe('Assembly Resolver', () => {
    
    it('Should import the cases', async () => {
        const assemblyResolve = new AssemblyResolver(importer);

        for(let i = 0; i < testCases.length; i++) {
            
            const testCase = testCases[i];
            importer.import.mockReset();
            importer.import.mockImplementation(path => {
                expect(path).toBe(testCase.path);
                return testCase.retPromise;
            });
            await assemblyResolve.Resolve(root, new Container(), testCase.assembly);
        }
    });

    it('Should throw an error', async () => {
        const assemblyResolve = new AssemblyResolver(importer);
        let error: Error | undefined = undefined;
        importer.import.mockReset();
        try {
            await assemblyResolve.Resolve(root, new Container(), {type: 'default'});
        } catch(e) {
            error = e;
        }
        expect(error).toBeDefined();
        error = undefined;

        try {
            await assemblyResolve.Resolve(root, new Container(), {type: 'default', file: 'fileName'});
        } catch(e) {
            error = e;
        }
        expect(error).toBeDefined();
        error = undefined;
    })
});