
import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/env.plugin'
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';


interface SendMailOption {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachment?: Attachment[];
}

interface Attachment {
    filename: string,
    path: string
}

export class EmailService {

    private trasporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    constructor(
        // private readonly logRepository: LogRepository,
    ){}

    async sendEmail(options: SendMailOption): Promise<boolean> {

        const { to, subject, htmlBody, attachment = [] } = options;

        try {
            const SendInformation = await this.trasporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachment
            })

            // console.log(SendInformation);

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email sent',
                origin: 'email.service.ts'
            })
            // this.logRepository.saveLog(log);

            return true;
        } catch (error) {
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email not sent',
                origin: 'email.service.ts'
            })
            // this.logRepository.saveLog(log);
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'logs del servidor'
        const htmlBody = `
            <h3>logs de sistema NOC </h3>
            <p>Prueba de correo</p>
            <p>Ojala se mejore de la rodilla</p>
            `;
        const attachment:Attachment[] = [
            {filename: 'logs-all.log', path: './logs/logs-all.log'}
        ]; 

        return this.sendEmail({
            to, subject, attachment, htmlBody
        })
    }
}