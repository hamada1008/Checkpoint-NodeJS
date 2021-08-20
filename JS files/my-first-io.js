const fs = require('fs')
const read = fs.readFileSync(process.argv[2])
str = read.toString()
const narr = str.split("")
var s = 0
for (let i of narr) 

{ if (i ==='\n') {s++ }
}
console.log(s)
