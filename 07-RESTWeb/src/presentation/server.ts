import express, { Router } from 'express';
import compression from 'compression';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    

    //* Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded
    this.app.use( compression() )

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );


    //* Routes
    this.app.use( this.routes );


    this.app.use((req, res) => {  
        res.sendFile(path.join(process.cwd(), "public", "index.html"));
    });

    // //* SPA
    // this.app.get('/', (req, res) => {
    //   const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
    //   res.sendFile(indexPath);
    // });
    

    // this.app.listen(this.port, () => {
    //   console.log(`Server running on port ${ this.port }`);
    // });

    this.app.listen(3000, () => {
        console.log(`Server running on Port ${3000}`);
    }); 

  }

}