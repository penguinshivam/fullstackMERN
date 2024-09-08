const express=require("express")
const path=require("path")
const app=express();


const port =8080;
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))

app.set('view engine', 'ejs');
// app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/hello",(req,res)=>{
    res.render("home.ejs");
})
app.get("/roll",(req,res)=>{
    let data=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{data});
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})

app.get("/ig/:username",(req,res)=>{
    let{username}=req.params;
    const igdb=require("./data.json")
    const data = igdb[username]
    // console.log(data);

    res.render("ig.ejs",{data})
    
} )