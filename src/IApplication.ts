import { Container } from 'inversify';

/**
 *
 *
 * @export
 * @interface IApplication
 */
export interface IApplication<T = any> {
    /**
     *
     *
     * @param {Container} container
     * @returns {Promise<void>}
     * @memberof IApplication
     */
    Run(container: Container): Promise<T>;
}