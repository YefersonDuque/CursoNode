import fs from "fs";
import { yarg } from './config/plugins/args.plugin'

const { b: base, l: limit, s: show } = yarg;

let outputMessage = '';

export const headerMessage = `
===============================
          TABLA DEL ${base} 
===============================\n
`

outputMessage = headerMessage + outputMessage;

if (show) {
    console.log(outputMessage);
}

//Crea la parpeta si no existe
const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true })

// Guardar la tabla en un archivo

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!')