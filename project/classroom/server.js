const express=require("express")
const app = express();
const session=require("express-session");
const flash=require("connect-flash")
const path=require("path")

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"))
const sessionOption={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true
};

app.use(session(sessionOption));
app.use(flash());

app.get("/register",(req,res)=>{
    let{name="unknown"}=req.query;
    req.session.name=name;
    req.flash("success","user registered successfully")
    res.redirect("/hello");
})

app.get("/hello",(req,res)=>{
    res.locals.messages=req.flash("success");
    res.render("alert.ejs",{name:req.session.name})
})

app.get("/test",(req,res)=>{
    res.send("test succcessful")
})

app.listen(8080,()=>{
    console.log("server is live");
    
})