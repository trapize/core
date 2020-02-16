import 'reflect-metadata';
import { Container } from 'inversify';
import { Symbols } from '../../src/Symbols';
import { Main } from '../../src/runtime/Main';

const di = jest.fn().mockImplementation((container, config, root) => {
    expect(container).toBeInstanceOf(Container);
    expect(config).toBeDefined();
    expect(root).toBeDefined();
    return Promise.resolve(container);
})
const app = {
    Run: jest.fn().mockImplementation(container => {
        expect(container).toBeInstanceOf(Container);
        return Promise.resolve();
    })
}

beforeEach(() => {
    di.mockClear();
    app.Run.mockClear();
});

function setup(): Container {
    const container = new Container();
    container.bind(Symbols.IApplication).toConstantValue(app);
    container.bind(Symbols.Runtime.IDependencyInjection).toFunction(di);
    return container;
}

describe('Main', () => {
    it('Should bind all', async () => {
        const container = setup();
        await Main('root', <any>{}, container);
    });

    it('Should skip config and root', async () => {
        const container = setup();
        container.bind(Symbols.Configuration.IAppConfig).toConstantValue({});
        container.bind(Symbols.Configuration.Root).toConstantValue('root');
        await Main('root', <any>{}, container);
    })
})