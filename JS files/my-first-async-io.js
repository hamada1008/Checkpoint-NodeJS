const fs = require('fs')
fs.readFile(process.argv[2],
"utf8", (err,data)=> { if (err) throw err;
    const narr = data.split("")
    var s = 0
    for (let i of narr) 
    
    { if (i ==='\n') {s++ }
    }
    console.log(s)




    ;})


