var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    name: String,
    password: String

})

mongoose.model("User", UserSchema)