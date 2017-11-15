var mongoose = require("../db");

var TodoModel = mongoose.model("Todo", {
    _id:Number,
    title:String,
    userid:String,
    desc:String,
    dates: String,
    completed: {type:Boolean, default:false},
    create_date:{type:Date, default:Date.now}
});

module.exports = TodoModel;