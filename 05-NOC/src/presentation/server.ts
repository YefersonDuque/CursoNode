import { CheckService } from "../domain/usecases/checks/check-service";
import { CronService } from "./cron/cron-service"

export class Server {
    public static start() {

        console.log('Server started..')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://google.com';
                new CheckService(
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).excecute(url)
                // new CheckService().excecute('http://localhost:3000');
            }
        );
    }
} 