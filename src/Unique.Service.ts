import { injectable } from 'inversify';
import { v1 } from 'uuid';
import { IUniqueService } from './IUnique.Service';

/**
 *
 *
 * @export
 * @class UniqueService
 * @implements {IUniqueService}
 */
@injectable()
export class UniqueService implements IUniqueService {
    /**
     *
     *
     * @returns {string}
     * @memberof UniqueService
     */
    public uuid(): string {
        return v1();
    }
}