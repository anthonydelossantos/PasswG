const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const passwGen= require("./passwGen");
const app =  express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static("public"));  
app.get("/",(req,res)=>{
    res.render("home")
});

app.post("/generated",(req,res) =>{
    let passwordGenerated=passwGen.randomPass();
    res.render("generated",{
        PassG:passwordGenerated
    })


});



app.listen(3000,()=>{
    console.log("Listen on the port 3000");
})
