// Dependencies
var express = require("express");
var path = require("path");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservation Data
var booked = [

    {
      name: "",
      phone: "",
      email: "",
      id: ""
    }

];

var reservations = [

    {
      name: "",
      phone: "",
      email: "",
      id: ""
    }

];



// Routes 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/addreservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays all Reservations
app.get("/api/booked", function(req, res) {
  return res.json(booked);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(reservations);
  });





// Posts
app.post("/api/booked", function(req, res) {
  
  
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
