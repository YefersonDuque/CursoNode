import fs from "fs";

let outputMessage = '';
const base: number = 5;

const headerMessage = `
===============================
          TABLA DEL ${base} 
===============================\n
`;

for (let num1 = 0; num1 <= 10; num1++) {
    outputMessage += `${base} x ${num1} = ${base * num1}\n`;
    
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

//Crea la parpeta si no existe
const outputPath = 'outputs';
fs.mkdirSync(outputPath,{recursive:true})

// Guardar la tabla en un archivo

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
