var express= require("express"),
    UserModel = require("../models/usermodel");

var router = express.Router();

router.get("/register.do", function(req, res) {
    res.render("user/form");
});

router.post("/register.do", function(req, res) {
    var name = req.body.username;
    var phone = req.body.userphone;
    var id = req.body.userid;
    var pwd = req.body.userpwd;
    console.log("폼입력값 : ", name, phone, id, pwd);
    
    var userModel = new UserModel();
    userModel._id = Date.now();
    userModel.name = name;
    userModel.userid = id;
    userModel.userpwd = pwd;
    userModel.phone = phone;
    
    userModel.save(function(err) {
        if(err) throw err;
        res.redirect("/home.do");
    });
});

router.get("/logout.do", function(req, res) {
    req.session.destroy(function(err){
        res.locals['logined'] = false;
        res.redirect("/home.do");
    });
});

router.get("/login.do", function(req, res) {
    res.render("user/loginform");
});

router.post("/login.do", function(req, res, next) {
    var id = req.body.userid;
    var pwd = req.body.userpwd;
    
    UserModel.find({userid:id}, function(err, users) {
        if(err) throw err;
        if(!users.length) {
            return next(new Error("아이디 혹은 비밀번호가 일치하지 않습니다."));
        }
        var dbUser = users[0];
        if(dbUser.userpwd != pwd) {
            return next(new Error("아이디 혹은 비밀번호가 일치하지 않습니다."));
        }
        req.session['LOGIN_USER'] = dbUser;
        
        res.redirect("/home.do");
    });
    
});

module.exports = router;