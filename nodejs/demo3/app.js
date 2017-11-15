var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

//express 객체 만들기
var app = express();

//뷰템플링 경로 설정하기
app.set('views', path.join(__dirname, 'view_templates'));
app.set('view engine', 'ejs');


//미들웨어 함수 등록하기
//로거출력 미들웨어, 정적컨텐츠제공 미들웨어, 폼입력값처리 미들웨어, 404에러 처리 미들웨어, 500에러처리 미들웨어 등을 등록한다.

// 로거 설정하기
app.use(logger('dev'));

//폼입력값 처리 미들웨어 함수 설정하기
//enctype이 "application/x-www-form-urlencoded"형식의 폼데이터 처리
app.use(bodyParser.urlencoded({extended:false}));

var entries = [];

// url 라우팅
// 요청url과 요청핸들러 미들웨어함수를 매핑시킨다.
app.get('/home.do', function(req, res) {
    res.render('home', {guestbooks:entries});
});

app.get('/add.do', function(req, res) {
    res.render('form');
});

app.post('/add.do', function(req, res) {
    var title = req.body.title;
    var writer = req.body.writer;
    var messages = req.body.messages;
    
    var entry = {
        title:title,
        writer:writer,
        messages:messages,
        published:new Date()
    }
    
    entries.push(entry);
    
    res.redirect('home.do');
});

app.get('/del.do', function(req, res) {
    var no = req.query.no;
    entries.splice(no, 1);
    
    res.redirect('home.do');
});

//404에러처리 미들웨어 함수 설정하기
//url라우팅에서 나열된 url과 요청url이 일치하지 않을 때 실행된다.
//항상 url라우팅 설정의 맨 끝에 설정한다.
app.use(function(req, res) {
    res.status(404).render('404err');
});

//500에러처리 미들웨어 함수 설정하기
//요청처리중 에러가 발생했을 때 실행된다.
app.use(function(err, req, res, next) {
    res.status(500).render('500err');
});

app.listen(3000, function() {
    console.log('웹서버 실행');
});