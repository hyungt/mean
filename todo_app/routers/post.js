var express= require("express"),
    PostModel = require('../models/postmodel'),
    UserMode = require('../models/usermodel');
var router = express.Router();

router.use(function(req,res,next) {
    if(req.session['LOGIN_USER']) {
        next();
    } else {
        next(new Error('게시판 조회 및 등록은 로그인 후 사용가능한 서비스입니다.'));
    }
});

router.get("/home.do", function(req, res) {
    
    res.render('posts/home');
});

router.get("/getall.do", function(req, res) {
    PostModel.find({}, function(err, result){
        if(err) throw err;
        res.send(result);
    });
});

router.post("/add.do", function(req, res) {
    
    var title = req.body.title;
    var contents = req.body.contents;
    
    var postModel = new PostModel();
    postModel._id = Date.now();
    postModel.title = title;
    postModel.contents = contents;
    postModel.userid = req.session['LOGIN_USER'].userid;
    
    postModel.save(function(err, result) {
        if(err) throw err;
        UserMode.findOne({userid:req.session['LOGIN_USER'].userid}, function(err, user) {
            
        });
        res.send(result);
    });
});

module.exports = router;