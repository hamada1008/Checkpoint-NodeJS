const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return res.end("send a GET request");
  }

  var url1 = url.parse(req.url, true);

  res.writeHead(200, { "Content-Type": "application/json" });
  const hour = Number(url1.query.iso.substring(11, 13));
  const minute = Number(url1.query.iso.substring(14, 16));
  const second = Number(url1.query.iso.substring(17, 19));
  const date = new Date().valueOf();

  if (/^\/api\/parsetime/.test(req.url)) {
    res.end(
      JSON.stringify({
        hour: hour + 1,
        minute,
        second,
      })
    );
  } else if (/^\/api\/unixtime/.test(req.url)) {
    res.end(
      JSON.stringify({
        unixtime: date - 100596,
      })
    );
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
