import 'reflect-metadata';
import { of } from 'rxjs';
import { EnsureOne } from '../../src/helpers/Operator.Helpers';

describe('Ensure One', () => {
    it('Should throw No Results', (done) => {
        of([]).pipe(EnsureOne()).subscribe({
            next: () => done('It should throw an error'),
            error: () => {
                done();
            }
        });
    });

    it('Should throw Too Many Results', (done) => {
        of([1, 1]).pipe(EnsureOne()).subscribe({
            next: () => done('It should throw an error'),
            error: () => {
                done();
            }
        });
    });

    it('Should throw No Results: undefined', (done) => {
        of<any>(undefined).pipe(EnsureOne()).subscribe({
            next: () => done('It should throw an error'),
            error: () => {
                done();
            }
        });
    });

    it('Should throw No Results: null', (done) => {
        of<any>(null).pipe(EnsureOne()).subscribe({
            next: () => done('It should throw an error'),
            error: () => {
                done();
            }
        });
    });

    it('Should Return Results: not array', (done) => {
        of<any>(1).pipe(EnsureOne()).subscribe({
            next: () => done(),
            error: done
        });
    });
    
    it('Should Return Results: array', (done) => {
        of<any>([1]).pipe(EnsureOne()).subscribe({
            next: () => done(),
            error: done
        });
    });
})