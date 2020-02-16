/**
 *
 *
 * @export
 * @interface IAssembly
 */
export interface IAssembly {
    type: string | any;
    /**
     *
     *
     * @type {(string | symbol)}
     * @memberof IAssembly
     */
    injectAs?: string | symbol;
    /**
     *
     *
     * @type {string}
     * @memberof IAssembly
     */
    path?: string;
    /**
     *
     *
     * @type {string}
     * @memberof IAssembly
     */
    namespace?: string;
    /**
     *
     *
     * @type {string}
     * @memberof IAssembly
     */
    file?: string;
    /**
     *
     *
     * @type {('TRANSIENT' | 'REQUEST' | 'SINGLETON')}
     * @memberof IAssembly
     */
    scope?: 'TRANSIENT' | 'REQUEST' | 'SINGLETON';
    /**
     *
     *
     * @type {('NEWABLE' | 'CONSTANT' | 'FUNCTION' | 'FACTORY' | 'AUTOFACTORY')}
     * @memberof IAssembly
     */
    binding?: 'NEWABLE' | 'CONSTANT' | 'FUNCTION' | 'FACTORY' | 'AUTOFACTORY';
}