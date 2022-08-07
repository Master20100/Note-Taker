var express = require('express');
var path = require("path");
var app = express();
var PORT = 5501;
// console.log(path.resolve("/public")); 
// Single routing
   
// app.use(express.static("./Develop/public"));
// app.get('/notes', function (req, res, next) {
//     // res.send("hello");
//     res.redirect("http://localhost:5501/notes.html");
// })
// app.use('/static', express.static('Develop'));
// app.use(express.static('public'));

// app.use(express.json());
app.use(express.static('Develop/public'));
app.get("/notes",(req,res,next)=>res.redirect("notes.html"));

// app.use((req,res,next)=>res.redirect("notes.html"));

// app.get("*",(req,res,next)=>res.send("aaaqqaa"));

 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});





