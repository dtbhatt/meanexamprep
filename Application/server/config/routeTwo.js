var dogs = require("./../controllers/dogs.js");
module.exports = function(app){
    // console.log(app, "I AM IN THE ROUTES FILES");
    app.get("/dogs", function(req, res){
        console.log("THIS IS DOGS");
        dogs.index(req, res);
    })
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./../client/dist/index.html"))
    })    
}