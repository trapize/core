import { Exception } from './Exception';

export class ResultException extends Exception {
    protected _source: string = 'App';
}

class NoResultsException extends ResultException {
    protected _code = 404;
}
class TooManyResultsException extends ResultException {
    protected _code = 400;
}

export const ResultExceptions = {
    NoResultsException,
    TooManyResultsException
};