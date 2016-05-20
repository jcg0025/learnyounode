var bl = require('bl')
var http = require('http')
var fs = require('fs')

http.get(process.argv[2], function(request){
request.pipe(bl(function (err, data) { 
    console.log(data.toString().length)
    console.log(data.toString())
  }))})
