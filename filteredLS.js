var fs = require('fs');

var dir = process.argv[2];

var ext = process.argv[3];

var pat = RegExp('\\.' + ext + '$');

var directory = fs.readdir(dir, function(error, list){
    for (var i = 0; i < list.length; i++) {
        if (pat.test(list[i])) {
            console.log(list[i]);
        }
    }
})