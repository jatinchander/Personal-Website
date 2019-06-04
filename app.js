// Require packages/frameworks
const express = require("express");
const fs = require("fs");
const app = express(); 

// Configure
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs"); 

// Routes
app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/resume", function(req, res){
    const tempFile = "public/stylesheets/resume.pdf";
    fs.readFile(tempFile, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        res.contentType("application/pdf");
        res.send(data);
    }
  });
});

// Starts server on Cloud 9 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
})
