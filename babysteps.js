var x = process.argv;
var sum = 0;
for (var i = 0; i < x.length; i++) {
    
    if(i > 1) {
       var num = parseInt(x[i]);
       sum += num;
    }
    
}

console.log(sum);