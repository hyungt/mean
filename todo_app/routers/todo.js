var express= require("express"),
    TodoModel = require('../models/todomodel');
var router = express.Router();

router.use(function(req,res,next) {
    if(req.session['LOGIN_USER']) {
        next();
    } else {
        next(new Error('내 일정 조회는 로그인 후 사용가능한 서비스입니다.'));
    }
});

router.get("/home.do", function(req, res) {
    var user = req.session['LOGIN_USER'];
    TodoModel.find({userid:user.userid, completed:false}, function(err, todos){
        if(err) throw err;
        res.render("todo/home", {todos:todos});
    });
    
});

router.get("/register.do", function(req, res) {
    res.render("todo/form");
});

router.post("/register.do", function(req, res){
    var todoModel = new TodoModel();
    
    todoModel._id = Date.now();
    todoModel.title = req.body.title;
    todoModel.userid = req.session['LOGIN_USER'].userid;
    todoModel.desc = req.body.desc;
    todoModel.dates = req.body.dates;
    
    todoModel.save(function(err){
        if(err) throw err;
        res.redirect("home.do")
    })
});

router.get("/complete.do", function(req, res) {
    var todoId = req.query.id;
    TodoModel.findOne({_id:todoId}, function(err, todo) {
        if(err) throw err;
        todo.completed = true;
        todo.save(function(err){
            if(err) throw err;
            res.redirect("home.do");
        });
    });
});

module.exports = router;