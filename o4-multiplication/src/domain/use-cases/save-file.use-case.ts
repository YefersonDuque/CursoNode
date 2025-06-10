import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(

    ) { }

    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }: Options): boolean {

        try {

            //Crea la parpeta si no existe
            fs.mkdirSync(fileDestination, { recursive: true })

            // Guardar la tabla en un archivo
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }
}