var http=require('http');
var fs = require('fs');

   fs.rename('hello.txt','pthonFile.txt',function(err){
    if (err)throw err;
     {
       console.log('saved!'); 
    }
   });
