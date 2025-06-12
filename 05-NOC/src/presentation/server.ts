import { CheckService } from "../domain/usecases/checks/check-service";
import { FilesSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.respository.impl";
import { CronService } from "./cron/cron-service"

const fileSystemLogRepository = new LogRepositoryImpl(
    
    new FilesSystemDatasource()
)

export class Server {
    public static start() {

        console.log('Server started..')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://google.com';
                // const url = 'http://localhost:3000';
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).excecute(url)
                // new CheckService().excecute('http://localhost:3000');
            }
        );
    }
} 