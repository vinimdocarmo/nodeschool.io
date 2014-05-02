var fs = require('fs'),
    fileDir = process.argv[2],
    fileContent = fs.readFileSync(fileDir, 'utf-8'),
    numbersOfLines = fileContent.split('\n').length - 1;

console.log(numbersOfLines);
