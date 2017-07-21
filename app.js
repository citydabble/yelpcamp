var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/events", function(req, res) {
   var events = [
      {name: "Party One", image: ""},
      {name: "Cultural Event", image: ""},
      {name: "Trade Show", image: ""},
      {name: "Osoyoos", image: ""}
   ];

   res.render("events", {events:events});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("Yelpcamp server started");
});
