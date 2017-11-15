//mongoClient 객체 획득
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/hta";

mongoClient.connect(url, function(err, db) {
    //연결 실패
    if(err) throw err;
    
    //연결 성공
    console.log('mongoDB에 연결됨');
    
    var user = [
        {_id:200, name:"이순신", email:"lee@gmail.com", pwd:"zxcv1234", age:50},
        {_id:300, name:"김유신", email:"kim@gmail.com", pwd:"zxcv1234", age:60},
        {_id:400, name:"강감찬", email:"kang@gmail.com", pwd:"zxcv1234", age:80},               
   ];
    
    db.collection("users").insertMany(user, function(err, result) {
        if(err) throw err;
        console.log("사용자 정보 저장 완료");
        //연결 끊기
        db.close();
    });
    
});