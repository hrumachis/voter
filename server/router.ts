import * as Express from 'express';
import Controllers from './controllers/Controllers';

export default class Router {
    private router: Express.Router;
    private express: Express.Application;
    private local: String;
    private controllers: Controllers;
    
    constructor( express: any ){
        this.express = express;
        this.router = Express.Router();
        this.controllers = new Controllers();
        this.local = __dirname.split("dist")[0];
    }

    build() {
        this.router.get( "/", this.controllers.Index);
        this.router.get( "/*", this.controllers.Assets);
        this.router.get( "/css/*", this.controllers.Assets);
        this.router.get( "/js/*", this.controllers.Assets);
        this.router.get( "/img/*", this.controllers.Assets);

        this.express.use( this.log );
        this.express.use( this.router );
    }

    log( req: Express.Request, res: Express.Response, next: Express.NextFunction ) {
        console.log("--------");
        console.log( req.method, new Date(), req.url );
        next();
    }
};