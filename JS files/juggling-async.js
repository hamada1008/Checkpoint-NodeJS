const http = require('http')
const bl = require('bl')

const results = []
let counter = 0
function print () {
    for (let i = 0; i < 3; i++) {
      console.log(results[i])}}

function httpget (i) {
http.get(process.argv[2 + i], (res)=> res.pipe(bl((err,data)=> {
    if (err) throw console.log(err);
    results[i] = data.toString()
    counter ++

    if (counter ===3) { print() }
})))
}

for (let j = 0 ; j < 3 ; j++) {httpget(j)}