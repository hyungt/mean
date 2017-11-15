var http = require('http');

var server = http.createServer(function(req, res) {
    
    console.log('url', req.url);
    console.log('method', req.method);
    
    
    var user = ["김유신", "홍길동", "강감찬", "이순신"];
    
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<html>');
    res.write('<head>');
    res.write('<meta charset="utf-8">');
    res.write('<title>nodejs 웹</title>');
    res.write('<body>');
    res.write('<h1>사용자 리스트</h1>');
    res.write('<ul>');
    user.forEach(function(item, index) {
       res.write('<li>' + item + '</li>'); 
    });
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    
    res.end();
});

server.listen(3000, function() {
    console.log("웹서버 시작");
})