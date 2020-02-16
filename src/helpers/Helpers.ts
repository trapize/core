/**
 *
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {T}
 */
export function RemoveUndefines<T = any>(obj: any): T {
    if(obj === null) {
        return obj;
    }
    Object.getOwnPropertyNames(obj).forEach(name => {
        if(obj[name] === undefined) {
            delete obj[name];
        }
    });
    return obj;
}

/**
 *
 *
 * @export
 * @param {any[]} array
 * @returns {any[]}
 */
export function Dedupe(array: any[]): any[] {
    return array.reduce((ary: any[], item: any) => {
        if(ary.indexOf(item) < 0) {
            ary.push(item);
        }
        return ary;
    }, []);
}

/**
 *
 *
 * @export
 * @param {string} val
 * @returns {string}
 */
export function lowerFirst(val: string): string {
    return val.charAt(0).toLowerCase() + val.substring(1);
}