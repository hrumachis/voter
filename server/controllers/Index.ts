import * as Express from 'express';
import Controller from "../models/Controller";
import CONST from "../models/Const";

export default class Index implements Controller {
    private htmlUrl: string = `${ CONST.__DISTNAME }/index.html`;

    public publish( req: Express.Request, res: Express.Response ) {
        console.log( new Date(), req.method, req.url );
        console.log( this.htmlUrl );
        console.log(CONST.__DIRNAME);
        
        try {
            console.log(`SEND ${ this.htmlUrl }`);
            res.sendFile( this.htmlUrl )
            return true;
        } catch( err ) {
            console.log( err ); 
            return false;
        }
    }
}