const path=require("path");
const express=require("express");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 2000;
const static_path=path.join(__dirname,"../public")

const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs")
app.set("views",templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(static_path));
app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about/*",(req,res)=>{
    res.render("404err");
});
app.get("/weather/*",(req,res)=>{
    res.render("404err");
});
app.get("*",(req,res)=>{
    res.render("404err",{
        err_cmmnt:"opps:( page not found"
    });
});


app.listen(2000,()=>{
    console.log(`listening to port ${port}`);
});