const { v4:uuidv4 } = require("uuid");
const express=require("express");
const app=express();
const path=require("path");
var methodOverride = require('method-override')

const port=8080;
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"))
app.use(methodOverride('_method'))

let posts=[
    {
        id:uuidv4(),
        username:"Hello",
        content:"world"
    },
    {
        id:uuidv4(),
        username:"Hello2",
        content:"world2"
    },
    {
        id:uuidv4(),
        username:"Hello3",
        content:"world3"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent = req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;
    res.redirect("/posts")
        
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post})

})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");  
})

app.listen(port,()=>{
    console.log(`listeing to port ${port}`); 
})
