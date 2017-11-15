//mongoClient 객체 획득
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/hta";

mongoClient.connect(url, function(err, db) {
    //연결 실패
    if(err) throw err;
    console.log("연결성공")
    /*
    db.collection("users").updateOne({_id:100}, {name:"류관순", email:"ryu@gmail.com"}, function(err, result) {
        if(err) throw err;
        
        console.log(result);
        
        db.close();
    })*/
    
    db.collection("users").updateOne({_id:200}, {$set:{email:"sin@gmail.com"}}, function(err, result) {
        if(err) throw err;
        
        console.log(result.modifiedCount);
        
        db.close();
    })
});