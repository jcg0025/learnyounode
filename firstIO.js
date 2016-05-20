var fs = require('fs');

var file = process.argv[2];

fileContents = fs.readFileSync(file);

contents = fileContents.toString();

console.log(contents.split('\n').length -1);


