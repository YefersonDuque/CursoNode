
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel; //Enum
    message: string;
    createAt?: Date;
    origin: string;
}

export class LogEntity {

    public level: LogSeverityLevel; //Enum
    public message: string;
    public createAt?: Date;
    public origin: string;


    constructor(options: LogEntityOptions) {
        const { message, level, createAt = new Date(), origin } = options;
        this.message = message;
        this.level = level;
        this.createAt = createAt;
        this.origin = origin;
    }

    static fromJson = (json: string): LogEntity => {
        const { message, level, createAt, origin } = JSON.parse(json);

        const log = new LogEntity({
            message,
            level,
            createAt,
            origin
        });

        return log;
    }
}