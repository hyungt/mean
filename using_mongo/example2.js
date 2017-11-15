//mongoClient 객체 획득
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/hta";

mongoClient.connect(url, function(err, db) {
    //연결 실패
    if(err) throw err;
    console.log("연결성공")
    /*
    db.collection("users").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log("조회성공");
        console.log(result);
        
        db.close();
    });
    */
    /*db.collection("users").findOne({_id:100}, function(err, result){
        if(err) throw err;
        console.log("조회성공");
        console.log(result);
        
        db.close();
    });*/
    db.collection("users").find({age:{$gt:50}}).toArray(function(err, result){
        if(err) throw err;
        console.log("조회성공");
        console.log(result);
        
        db.close();
    });
});