//Code to create files in files folder

const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname, 'files') 
for(var i =0; i < 5; i++){
    fs.writeFileSync(dirpath +"/hello" + i +".txt", 'a simple text file' )
}