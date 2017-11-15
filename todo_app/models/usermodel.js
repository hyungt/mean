var mongoose = require("../db");

var UserModel = mongoose.model("User", {
    _id:Number,
    name:String,
    userid:{type:String, unique:true},
    userpwd:String,
    phone: String,
    create_date:{type:Date, default:Date.now}
});

module.exports = UserModel;