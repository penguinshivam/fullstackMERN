const express =require("express");
const mongoose=require('mongoose');
const app = express();
const path=require("path");
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
    
}

app.get("/chats",async (req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats});
})
app.get("/chats/new",async (req,res)=>{
    res.render("newform.ejs");
})

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    console.log(newChat);
    
    
    newChat.save().then((res)=>{console.log(res);
    }) ;
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat})
});
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updatedChat= await Chat.findByIdAndUpdate(
        id,
        {msg:newmsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
    
})
app.delete("/chats/:id",async (req,res)=>{
    let {id}= req.params
    let deletedchat=await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect("/chats");

})

app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(8080,()=>{
    console.log("server is listenting on port 8080");
    
})