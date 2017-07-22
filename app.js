var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var events = [
   {name: "Party One", image: ""},
   {name: "Cultural Event", image: ""},
   {name: "Trade Show", image: ""},
   {name: "Osoyoos", image: ""}
];


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/events", function(req, res) {
   res.render("events", {events:events});
});

app.get("/events/new", function(req, res) {
   res.render("new")
});

app.post("/events", function(req, res) {
   //get data from form
   var name = req.body.name;
   var image = req.body.image;
   new event = {name: name, image: image}
   event.push(name, image))
   res.render("You've hit post in events")
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("Yelpcamp server started");
});
