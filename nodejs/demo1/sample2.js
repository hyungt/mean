var http = require("http");

var server = http.createServer(function(req, res) {
    res.end("hello nodejs!!!");
});
server.listen(3000);