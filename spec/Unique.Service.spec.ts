import 'reflect-metadata';
import { UniqueService } from '../src/Unique.Service';

describe('Unique Service', () => {
    it('Should create a unique string', () => {
        const service = new UniqueService();
        expect(service.uuid()).not.toEqual(service.uuid());
    });
})