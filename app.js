var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var events = [
   {name: "Party One", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/170425_WILD_KARD_PARTY_-_K.A.R.D_%27RUMOR%27_%EC%A7%81%EC%BA%A0_by_DaftTaengk_000214447_cut.png"},
   {name: "Cultural Event", image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cultural_events_during_Rose_Festival_2017%2C_Chandigarh_07.jpg"},
   {name: "Trade Show", image: "https://www.onsightapp.com/blog/wp-content/uploads/2016/10/maxresdefault.jpg"},
   {name: "Osoyoos", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spotted_Lake_-_panoramio_%282%29.jpg"},
   {name: "Party One", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/170425_WILD_KARD_PARTY_-_K.A.R.D_%27RUMOR%27_%EC%A7%81%EC%BA%A0_by_DaftTaengk_000214447_cut.png"},
   {name: "Cultural Event", image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cultural_events_during_Rose_Festival_2017%2C_Chandigarh_07.jpg"},
   {name: "Trade Show", image: "https://www.onsightapp.com/blog/wp-content/uploads/2016/10/maxresdefault.jpg"},
   {name: "Osoyoos", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spotted_Lake_-_panoramio_%282%29.jpg"}
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
   var newEvent = {name: name, image: image};
   events.push(newEvent);
   res.redirecct("/events");
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("Yelpcamp server started");
});
