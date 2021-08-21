const map = require("through2-map");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end("send a post request");
  }
  res.writeHead(200, { "Content-Type": "Text/plain" });

  req
    .pipe(
      map(function (chunk) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});

server.listen(Number(process.argv[2]));
