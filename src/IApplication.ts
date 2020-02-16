import { Container } from 'inversify';

/**
 *
 *
 * @export
 * @interface IApplication
 */
export interface IApplication {
    /**
     *
     *
     * @param {Container} container
     * @returns {Promise<void>}
     * @memberof IApplication
     */
    Run(container: Container): Promise<void>;
}