import 'reflect-metadata';
import { Exception } from '../../src/exceptions/Exception';
/*
public constructor();
    public constructor(message: string);
    public constructor(message: string, innerException: Exception);
    public constructor(message: string, data: {[key: string]: any});
    public constructor(message: string, data: {[key: string]: any}, innerException: Exception);
    public constructor(data: {[key: string]: any});
    public constructor(innerException: Exception);
    public constructor(data: {[key: string]: any}, innerException: Exception);
    public constructor(messageOrDataOrInner?: string | Exception | {[key: string]: any}, innerOrData?: Exception | {[key: string]: any}, inner?: Exception);
*/

class TestException extends Exception {
    protected _source: string = 'Core.Test';
}

describe('Exceptions', () => {
    it('Should construct every way', () => {
        expect(new TestException()).toBeInstanceOf(Exception);
        expect(new TestException('message')).toBeInstanceOf(Exception);
        expect(new TestException('message', new TestException())).toBeInstanceOf(Exception);
        expect(new TestException('message', {})).toBeInstanceOf(Exception);
        expect(new TestException('message', {}, new TestException())).toBeInstanceOf(Exception);
        expect(new TestException({})).toBeInstanceOf(Exception);
        expect(new TestException({}, new TestException())).toBeInstanceOf(Exception);
        expect(new TestException(new TestException())).toBeInstanceOf(Exception);
    });

    it('Should set stack', () => {
        expect(new TestException().Stack).toBeDefined();
    });

    it('Should create a truncated json', () => {
        const noInner = new TestException('message', {value: 'this'});
        const inner = new TestException('message', {value: 'this'}, new TestException('inner'));

        const noInnerJson = noInner.ToJSON();
        const noInnerInternal = noInner.ToInternalJSON();
        const innerJson = inner.ToJSON();
        const innerInternal = inner.ToInternalJSON();

        expect(noInnerJson.error.message).toBe('message');
        expect(noInnerJson.error.data).toBeDefined();
        expect(noInnerJson.error.data.value).toBe('this');
        expect(noInnerJson.error.inner).toBeUndefined();
        expect(noInnerJson.error.name).toBeUndefined();
        expect(noInnerJson.error.stack).toBeUndefined();
        expect(noInnerJson.error.source).toBeUndefined();

        
        expect(noInnerInternal.error.message).toBe('message');
        expect(noInnerInternal.error.data).toBeDefined();
        expect(noInnerInternal.error.data.value).toBe('this');
        expect(noInnerInternal.error.inner).toBeUndefined();
        expect(noInnerInternal.error.name).toBe('TestException');
        expect(noInnerInternal.error.stack).toBeDefined();
        expect(noInnerInternal.error.source).toBe('Core.Test');


        expect(innerJson.error.message).toBe('message');
        expect(innerJson.error.data).toBeDefined();
        expect(innerJson.error.data.value).toBe('this');
        expect(innerJson.error.inner).toBeDefined();
        expect(innerJson.error.inner.error.message).toBe('inner');
        expect(innerJson.error.name).toBeUndefined();
        expect(innerJson.error.stack).toBeUndefined();
        expect(innerJson.error.source).toBeUndefined();

        
        expect(innerInternal.error.message).toBe('message');
        expect(innerInternal.error.data).toBeDefined();
        expect(innerInternal.error.data.value).toBe('this');
        expect(innerInternal.error.inner).toBeDefined();
        expect(innerInternal.error.inner.error.message).toBe('inner');
        expect(innerInternal.error.name).toBe('TestException');
        expect(innerInternal.error.stack).toBeDefined();
        expect(innerInternal.error.source).toBe('Core.Test');
    })
});