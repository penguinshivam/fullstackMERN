const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js")
const {isLoggedIn} = require("../middleware.js")


const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next()
    }
}


//index
router.get("/",wrapAsync(async (req,res,next)=>{
    const allListings= await Listing.find();
    res.render("listings/index.ejs",{allListings});
}))

//new 
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new.ejs");
})

//show
router.get("/:id",wrapAsync(async (req,res,next)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("deleted","listing not avilable")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs",{listing})
}))

//create
router.post("/",isLoggedIn,validateListing,wrapAsync(async (req,res,next)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","Listing added successfully");
    res.redirect("/listings");
}))

//edit
router.get("/:id/update",isLoggedIn,wrapAsync(async (req,res,next)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("deleted","listing not avilable")
        res.redirect("/listings")
    }
    res.render("listings/update.ejs",{listing})
}))

//update
router.put("/:id",isLoggedIn,validateListing,wrapAsync(async (req,res,next)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing updated successfully");
    res.redirect(`/listings/${id}`)
}))

//destroy
router.delete("/:id",isLoggedIn,wrapAsync(async (req,res,next)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("deleted","Listing deleted successfully");
    res.redirect("/listings");
}))

module.exports=router;