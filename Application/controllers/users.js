var mongoose = require("mongoose");

var User = mongoose.model("User");

function UserController() {
    this.register = function(req, res) {
        console.log(req.body, "THIS IS THE USER CONTROLLER")
        User.findOne({ username: req.body.username }, function(err, user) {
            if (err) {
                res.status(500).json({ message: "Whoops" })
            } else {
                if (user) {
                    if (user.password == req.body.password) {
                        res.json({ user: user, message: "Authenticaed" })
                    } else {
                        res.status(401).json({ message: "Password does not match" })
                    }
                } else {
                    var user = new User(req.body);
                    user.save(function(err) {
                        if (err) {
                            console.log("error saving user");
                            res.json(501).json({ message: "Whoops" });
                        } else {
                            res.json({ user: user, message: "created" })
                        }
                    })
                }
            }
        })
    }
}

this.show = function(req, res) {
    User.findOne({ _id: req.params.id }),
        function(req, res) {
            if (err) {
                res.static(500).json({ message: "Whoops" })
            } else {
                res.json({
                    user: user
                })
            }
        }
}

module.exports = new UserController();