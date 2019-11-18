const fs = require ('fs')

const buffer = fs.readFileSync(process.argv[2]).toString()

const array = buffer.split('\n').length - 1
console.log(array)