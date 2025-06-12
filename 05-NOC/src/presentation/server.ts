import { envs } from "../config/plugins/env.plugin";
import { CheckService } from "../domain/usecases/checks/check-service";
import { FilesSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.respository.impl";
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    
    new FilesSystemDatasource()
)

export class Server {
    public static start() {

        console.log('Server started..')

        // Mandar email

        // const emailService = new EmailService();
        // emailService.sendEmail({
        //     to:'yduque@clinicasomer.com',
        //     subject: 'logs de sistema',
        //     htmlBody: `
        //     <h3>logs de sistema NOC </h3>
        //     <p>Prueba de correo</p>
        //     <p>Ver logs adjuntos</p>
        //     `

        // })-------------------------------------------------------

        // const emailService = new EmailService();
        // emailService.sendEmailWithFileSystemLogs([
        //     'duqueyeferson@gmail.com','csilva@clinicasomer.com'
        // ])-----------------------------------------------------------

         const emailService = new EmailService(
            fileSystemLogRepository
         );
        emailService.sendEmailWithFileSystemLogs([
            'duqueyeferson@gmail.com'
        ])
        // -----------------------------------------------------------

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://google.com';
        //         // const url = 'http://localhost:3000';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error)
        //         ).excecute(url)
        //         // new CheckService().excecute('http://localhost:3000');
        //     }
        // );
    }
}

