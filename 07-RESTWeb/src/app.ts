// src/app.ts
import { envs } from "./config/envs";
import { Server } from "./presentation/server";

(async()=> {
    main();
})();

function main(){
    // Pasamos el puerto opcional
    const server = new Server({ 
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
     });
    server.start();
}

