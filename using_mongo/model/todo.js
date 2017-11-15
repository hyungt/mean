var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hta");

var Todo = mongoose.model("Todo", {
    _id: Number,
    title: String,
    description: String,
    start_date: String,
    create_date: Date
});

module.exports = Todo;