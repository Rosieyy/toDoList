const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
const items = [];
const workItems = [];

app.get("/",function(req,res){
    
    const day = date.getDate();
    res.render('index', {listTitle: day, items:items});
});


app.post("/",function(req,res){

    const item = req.body.newToDo;
    if(req.body === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render('index', {listTitle: "Work List", items:workItems});
});

app.post("/work",function(){
    let item = req.body.newToDo;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
})



app.listen(3000,function(){
    console.log("server started on port 3000");
});