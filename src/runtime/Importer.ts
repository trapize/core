import { injectable } from 'inversify';
import { IImporter } from './IImporter';

/**
 *
 *
 * @export
 * @class Importer
 * @implements {IImporter}
 */
@injectable()
export class Importer implements IImporter {
    /* istanbul ignore next */
    /**
     *
     *
     * @param {string} path
     * @returns {Promise<any>}
     * @memberof Importer
     */
    public async import(path: string): Promise<any> {
        return import(path);
    }
}