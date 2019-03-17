import * as Express from 'express';
export default abstract class Controller {
    abstract publish( req: Express.Request, res: Express.Response ): boolean;
}