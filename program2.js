process.argv[0]='node'
let a = 0 
for (let i=2; i<process.argv.length; i++){
   a=a+ Number(process.argv[i])
}

console.log(a)