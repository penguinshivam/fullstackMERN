const express=require("express");
const app=express();
const mongoose =require("mongoose")
const Listing = require("./models/listing.js")
const path = require("path");


app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}));

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust'
main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));


async function main() {
    await mongoose.connect(MONGO_URL);   
}

app.get("/listings",async (req,res)=>{
    const allListings= await Listing.find();
    res.render("listings/index.ejs",{allListings});
})


app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing})
})

app.post("/listings",async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")
    
})

// app.get("/testListing",async (req,res)=>{
//     let sample=new Listing({
//         title:"My first",
//         description:"By the becah",
//         price:1200,
//         location:"goa",
//         country:"India",
//     });

//     await sample.save();
//     console.log("success");
//     res.send("sucess")
    
// })
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,()=>{
    console.log("listening to port 8080");
    
})