import env from 'env-var'
import { Server } from "./presentation/server";
import { envs } from './config/plugins/env.plugin';

(() => {
    main();
})();

function main() {
    // Server.start();
    console.log(envs)
}