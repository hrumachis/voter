export default class CONST {
    public static DISTNAME = 'dist';
    public static __DISTNAME = `${ __dirname.split("server")[0] }dist/voter`;
    public static __DIRNAME = `${ __dirname.split("server")[0].slice(0, -1) }`;
}