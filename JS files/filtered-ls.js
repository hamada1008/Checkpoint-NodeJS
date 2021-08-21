const fs = require("fs");
fs.readdir(process.argv[2], "utf8", (err, list) => {
  if (err) throw err;

  var list2 = list.filter((el) => el.endsWith("." + process.argv[3]));
  for (let i of list2) {
    console.log(i);
  }
});
