import * as Express from 'express';
import * as http from 'http';
import Router from './router';

class App {
    private port: Number = 5500;
    private express: Express.Application;
    private http: any;
    private router: Router;

    constructor() {
        this.express = Express();
        this.http = http.createServer( this.express );
        this.router = new Router( this.express );
    }

    public build() {
        let self = this;
        
        this.router.build();

        this.http.listen(  process.env.PORT || this.port, function() {
            console.log( 'Node app is running on port', process.env.PORT || self.port );
        } );
    }
}

var app = new App();
app.build();