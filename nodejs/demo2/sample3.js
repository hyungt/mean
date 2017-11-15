var express = require('express'),
    serveStatic = require('serve-static'),
    path = require('path');

var app = express();

//정적컨텐츠(html css js images)를 제공하는 미들웨어 함수 등록하기
var staticContentPath = path.join(__dirname, 'public');
app.use(serveStatic(staticContentPath));


app.use(function(req, res, next) {
    console.log('세번째 미들웨어 함수가 실행됨');
    next();
});

app.use(myMiddleware(true));

app.get("/", function(req, res){
    console.log(req.REQ_URL);
    res.type("text/plain;charset=utf-8");
    res.status(200);
    res.send('hello, express');
});


app.use(function(err, req, res, next) {
    console.log("첫번째 에러 처리용 미들웨어 함수 실행됨");
    console.log(err);
    next(err);
});

app.use(function(err, req, res, next){
    console.log("두번째 에러 처리용 미들웨어 함수 실행됨");
    res.type("text/plain;charset=utf-8");
    res.status(500);
    res.send("server error");
});


app.listen(3000, function() {
    console.log("웹 서버가 시작됨...");
});

function myMiddleware(isShow) {
    return function(req, res, next) {
        console.log("네번째 미들웨어 함수가 실행됨");
        if(isShow) {
            console.log("요청url", req.url);
        }
        next();
    }
}