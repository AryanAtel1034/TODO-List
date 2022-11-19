const express = require("express");
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var userInputs = []; // make a Global variable 
var userInputsLenght=0;

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list.ejs", {kindofday: day, newitem: userInputs , totalLength:userInputsLenght}); // pass at once to get render 

});
app.post("/", function (req, res) {

      var  userInput = req.body.text;

      userInputs.push(userInput);
      userInputsLenght= userInputs.length;

        res.redirect("/"); // Directing to home route


    }),




    app.listen(3000, function () {
        console.log("we are on port 3000");
    })