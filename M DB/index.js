const express =require("express");
const mongoose=require('mongoose');
const app = express();
const path=require("path");
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js")

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
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
    
}

app.get("/chats",asyncWrap(async (req,res,next)=>{

        let chats=await Chat.find();
        res.render("index.ejs",{chats});
     
}))
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page not found")
    res.render("newform.ejs");
})

app.post("/chats",asyncWrap(async(req,res,next)=>{
        let {from,msg,to}=req.body;
        let newChat=new Chat({
            from:from,
            to:to,
            msg:msg,
            created_at:new Date()
        });
        await newChat.save().then((res)=>{console.log(res);
        }) ;
        res.redirect("/chats");
})
)
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

app.get("/chats/:id",asyncWrap( async (req,res,next)=>{
    
        let {id}=req.params;
        let chat = await Chat.findById(id);
        if(!chat){
           return next(new ExpressError (404,"Chat not found"));
        }
        res.render("edit.ejs",{chat})
    
}));
app.get("/chats/:id/edit",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs",{chat})     

}));
app.put("/chats/:id",asyncWrap(async (req,res,next)=>{
        let {id}=req.params;
        let {msg:newmsg}=req.body;
        let updatedChat= await Chat.findByIdAndUpdate(
            id,
            {msg:newmsg},
            {runValidators:true,new:true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
    
    
}))
app.delete("/chats/:id",asyncWrap(async (req,res,next)=>{

        let {id}= req.params
        let deletedchat=await Chat.findByIdAndDelete(id);
        console.log(deletedchat);
        res.redirect("/chats");
    

}))

app.get("/",(req,res)=>{
    res.send("working");
})

app.use((err,req,res,next)=>{
    console.log(err.name);
    next(err);
})
app.use((err,req,res,next)=>{
    let {status=500,message="some error occured"}=err;
    res.status(status).send(message);
})
app.listen(8080,()=>{
    console.log("server is listenting on port 8080");
    
})