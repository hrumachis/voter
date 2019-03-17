import * as Express from 'express';
import Controller from "../models/Controller";
import Index from './Index';
import CONST from "../models/Const";

export default class Controllers {
    private list: Map< string, Controller >;

    constructor() {
        this.list = new Map();
        this.list.set( "index", new Index() );
    }

    get Index() { 
        let self = this;
        
        return function ( req: Express.Request, res: Express.Response, next: Express.NextFunction ) {
            self.list.get( "index" ).publish(req, res);
        };
    }

    get Assets() { 
        let self = this;
        
        return function ( req: Express.Request, res: Express.Response, next: Express.NextFunction ) {
            var locale: Array< string > = req.url.split( "/" );
            var url: string;
            
            if ( locale[ 1 ] == "js" || locale[ 1 ] == "css" || locale[ 1 ] == "img") {
                url = `${ CONST.__DISTNAME }/${ locale[ 1 ]}/${ locale[ 2 ] }`;
            } else {
                url = `${ CONST.__DISTNAME }/${ locale[ 1 ]}`;
            }

            console.log( url );
            res.sendFile( url );
        };
    }
}