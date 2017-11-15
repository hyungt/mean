var mongoose = require("../db");

var PostModel = mongoose.model("Post", {
    _id:Number,
    title:String,
    userid:String,
    contents:String,
    create_date:{type:Date, default:Date.now}
});

module.exports = PostModel;