const fs= require('fs')
 const path = require('path')

 const extension = '.md'
 fs.readdir(process.argv[2], function(err, list){
     if (err) console.log('erreur')
     else {
         var targetFiles = list.filter(el => path.extname(el)=== extension)

     }
     targetFiles.forEach(item => {
         console.log(item)
     });
 })