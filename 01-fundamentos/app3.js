const fs = require('fs');

const content = fs.readFileSync('readme.md','utf-8');

const wordCount = content.split(' ').length;

const reactWordCount = content.match(/react/gi);

console.log('Palabras: ', reactWordCount.length);