import { ConfigurationSymbols } from './configuration/Configuration.Symbols';
import { MonitorSymbols } from './monitor/Monitor.Symbols';
import { RuntimeSymbols } from './runtime/Runtime.Symbols';

export const Symbols = {
    IApplication: Symbol.for('IApplication, Core'),
    IUniqueService: Symbol.for('IUniqueService, Core'),
    Configuration : ConfigurationSymbols,
    Monitor: MonitorSymbols,
    Runtime: RuntimeSymbols
};