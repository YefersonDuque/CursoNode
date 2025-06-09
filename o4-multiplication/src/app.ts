import { mainModule } from "process";
import { yarg } from "./config/plugins/args.plugin";


// console.log(yarg.b)

(async() => {
    await main();
})();

async function main() {
    console.log('main ejecutado')
}
