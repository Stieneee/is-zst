const fs = require('fs');
const path = require('path');
const isZst = require('../');

if (isZst(fs.readFileSync(path.join(__dirname, './test.txt')))) throw Error('test failed - test.txt');
if (!isZst(fs.readFileSync(path.join(__dirname, './test.txt.zst')))) throw Error('test failed - test.txt.zst');

console.log("Tests passed");

