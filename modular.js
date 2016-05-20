var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    var extension = '.'+ext;
    fs.readdir(dir, function(err, files){
        if(err) {
            callback(err, null);
        }
        else {
            var results = [];
            files.forEach(function(file) {
                if (path.extname(file) === extension) {
                    results.push(file);
                }
            })
            callback(null, results);
        }
    })
}