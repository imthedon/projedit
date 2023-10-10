const express = require("express");

// const passport = require("passport");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/contact",(req,res)=>{
  res.render("contact")
})
router.get("/about",(req,res)=>{
  res.render("about")
})
router.get("/billrec",(req,res)=>{
  res.render("billrec")
})
router.get("/profile",(req,res)=>{
  res.render("profile")
})
router.get("/logout", (req, res) => {
  // Destroy the user's session (assuming you're using sessions)
  // req.logout();
  res.redirect("/login");
   // Redirect to the login page after logout
});

module.exports = router;
