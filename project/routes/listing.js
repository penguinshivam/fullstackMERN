const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

//index
router.get(
  "/",
  wrapAsync(async (req, res, next) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
  })
);

//new
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

//show
router.get(
  "/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ 
        path: "reviews", 
        populate: { 
        path:"author"},
      })
      .populate("owner");
    console.log(listing);

    if (!listing) {
      req.flash("deleted", "listing not avilable");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//create
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Listing added successfully");
    res.redirect("/listings");
  })
);

//edit
router.get(
  "/:id/update",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("deleted", "listing not avilable");
      res.redirect("/listings");
    }
    res.render("listings/update.ejs", { listing });
  })
);

//update
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
  })
);

//destroy
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("deleted", "Listing deleted successfully");
    res.redirect("/listings");
  })
);

module.exports = router;
