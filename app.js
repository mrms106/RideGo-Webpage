if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
const {sendmail}=require("./sendmail/sendform")


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.get("/contactus",(req,res)=>{
    res.render("contactus.ejs");
});
app.post("/contactus",(req,res)=>{
    try{
        const  form=req.body.form;
        sendmail(form);
        res.render("thanku.ejs");

    }catch(error){
        console.log(error);
        res.send("error to send form try again")

    }
})

app.listen("8080",()=>{
    console.log("running on port 8080");
});