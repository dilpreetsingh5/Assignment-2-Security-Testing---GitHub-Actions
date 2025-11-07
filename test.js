const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}

function insecureFunction(userInput) {
    eval(userInput);
}

function main() {
    const userInput = process.argv[2];
    insecureFunction(userInput);
}

main();
