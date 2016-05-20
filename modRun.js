var modular = require('./modular');

var dir = process.argv[2];
var ext = process.argv[3];

modular(dir, ext, function(err, files){
    for (var i =0; i < files.length; i++){
        console.log(files[i]);
    }
})