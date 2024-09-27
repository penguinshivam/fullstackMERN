const express=require("express")
const ExpressError=require("./ExpressError")
const app=express();


const checkToken=(req,res,next)=>{
    const {query}=req.query
    if(query==="giveaccess"){
        console.log("sucess");
        next();
    }
    throw new ExpressError(401,"Access Denied")
};

app.get("/api",checkToken,(req,res)=>{
    res.send("Api Data");
})

app.get("/random",(req,res)=>{
    res.send("random Page");
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is not allowed")
})

app.get("/wrong",(req,res)=>{
    abcd=abcd
    res.send("random Page");
})

app.use((err,req,res,next)=>{
    let {status=500,message="some err occured"}=err;
    res.status(status).send(message);
})

app.use((err,req,res,next)=>{
    console.log("------errror middleware------");
    next(err);
})

app.get("/",(req,res)=>{
    res.send("i am root");
})
app.listen(8080,()=>{
    console.log("listing");
    
})