import { OperatorFunction, throwError, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ResultExceptions } from '../exceptions/Result.Exceptions';

export function EnsureOne<T>(): OperatorFunction<T[],T> {
    return inputs$ => inputs$.pipe(
        mergeMap(values => {
            if(values === undefined || values === null) {
                return throwError(new ResultExceptions.NoResultsException());
            }
            
            if(values.length === 1 || !Array.isArray(values)) {
                return of(values[0]);
            } else if(values.length === 0) {
                return throwError(new ResultExceptions.NoResultsException());
            } else {
                return throwError(new ResultExceptions.TooManyResultsException());
            }
        })
    )
}
