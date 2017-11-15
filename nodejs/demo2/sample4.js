var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'view_templates'));
app.set('view engine', 'ejs');

app.get('/list.do', function(req, res) {
    res.render('list', {
        type:"현재 재직중인 사원리스트",
        employees: [
            {no:100, name:'김유신', dept:"총무부"},
            {no:110, name:'강감찬', dept:"비서실"},
            {no:120, name:'이순신', dept:"경리부"},
            {no:130, name:'홍길동', dept:"영업부"}
        ]
    });
})

app.listen(3000, function() {
    console.log("웹서버 시작");
});