const express =require("express");
const mongoose=require('mongoose');
const app = express();
const path=require("path");
const Chat=require("./models/chat.js")

app.set('view engine', 'ejs');
// app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
    
}

app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(8080,()=>{
    console.log("server is listenting on port 8080");
    
})