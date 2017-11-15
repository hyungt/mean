var express = require("express"),
    bodyParser = require("body-parser"),
    expressSession = require('express-session'),
    path = require('path');

var app = express();

//뷰 템플릿 엔진 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//폼 입력값 처리
app.use(bodyParser.urlencoded({extended:false}));
//json형식의 요청데이터 처리
app.use(bodyParser.json());

//로그인 세션관리
app.use(expressSession({
    secret:'ABEFq8EqyYDCFxs8',
    resave : false,
    saveUninitialized: true
}));

app.use(function(req, res, next){
    if(req.session['LOGIN_USER']) {
        res.locals['logined'] = true;
    } else {
        res.locals['logined'] = false;
    }
    next();
});

app.get("/home.do", function(req, res) {
    res.render("home");
});

app.use("/user", require("./routers/user"));
app.use("/todo", require("./routers/todo"));
app.use("/post", require("./routers/post"));

app.use(function(req, res) {
    res.status(404);
    res.render('error/notfound');
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.render('error/servererror', {error:err});
});

app.listen(3000, function() {
    console.log("Web Server Start");
});