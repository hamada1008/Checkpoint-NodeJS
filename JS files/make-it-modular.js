const mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], (err, files) => {
  for (let i of files) {
    console.log(i);
  }
});
