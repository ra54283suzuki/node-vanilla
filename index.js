const http = require("http");
const { runInNewContext } = require("vm");

http.createServer(function (req, res) {
  if(req.url === "/") {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.write("こんにちは");
    res.end();
  } else if(req.url === "/about") {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.write("ここはAboutページです");
    res.end();
  }
}).listen(4000, function () {
  console.log("Listening on localhost port 4000");
});