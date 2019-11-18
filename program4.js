// const fs = require('fs')

// const file = fs.readFile(process.argv[2])


  
const fs = require('fs')

fs.readFile(process.argv[2], countNewLines)

function countNewLines (err, text) {
  if (err) {
    return console.log(err)
  }
  const Count = text.toString().split('\n').length - 1
  console.log(Count)
}







