import { IAppConfig } from '../configuration/IApp.Config';
import { Container } from 'inversify';

export type IDependencyInjection = (container: Container, config: IAppConfig, root: string) => Promise<Container>;