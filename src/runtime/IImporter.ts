/**
 *
 *
 * @export
 * @interface IImporter
 */
export interface IImporter {
    /**
     *
     *
     * @param {string} path
     * @returns {Promise<any>}
     * @memberof IImporter
     */
    import(path: string): Promise<any>;
}