const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standerd Get Response, Welcome ${user}`)
})
app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`standerd Post Response , welcome ${user}`)
})

app.listen(port,()=>{
    console.log(`listeing to port ${port}`);
    
})
