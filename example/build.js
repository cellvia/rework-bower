var rework = require('rework');
var reworkBower = require('../');
var fs = require('fs');
var path = require('path');

var entry = path.join(__dirname, 'main.css');
var outFile = path.join(__dirname, 'compiled.css');

var input = fs.readFileSync(entry, 'utf8');
var output = rework(input, { source: path.relative(__dirname, entry) })
    .use(reworkBower())
    .toString({ sourcemap: true });

fs.writeFileSync(outFile, output, 'utf8');
