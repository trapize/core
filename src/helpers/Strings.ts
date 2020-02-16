export class Strings {
    public static LowerFirst(val: string): string {
        return val.charAt(0).toLowerCase() + val.substring(1);
    }

    public static SnakeToCamel(val: string): string {
        return val.replace(/(_\w)/g, m => {
            return m[1].toUpperCase();
        });
    }

    public static CamelToSnake(val: string): string {
        return val.replace(/[\w]([A-Z])/g, m => {
            return m[0] + "_" + m[1];
        }).toLowerCase();
    }
}