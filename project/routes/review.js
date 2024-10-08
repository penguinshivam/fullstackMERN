const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js")
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js")


const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next()
    }
}


router.post("/",validateReview,wrapAsync(async (req,res,next)=>{
    let listing=await Listing.findById(req.params.id)
    const newReview=new Review(req.body.review);
    listing.reviews.push(newReview)
    await newReview.save();
    await listing.save();
    req.flash("success","review added successfully");
    res.redirect(`/listings/${req.params.id}`);
}))

router.delete("/:reviewId",wrapAsync(async (req,res,next)=>{
    
    await Listing.findByIdAndUpdate(req.params.id,{$pull:{reviews:req.params.reviewId}});
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash("deleted","review deleted successfully");
    res.redirect(`/listings/${req.params.id}`);
}))

module.exports=router;

