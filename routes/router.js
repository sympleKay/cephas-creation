const express = require ("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
})

router.get("/service", function (req, res) {
    res.render("service");
})

router.get("/about", function (req, res) {
    res.render("about");
})

router.get("/contact", function (req, res) {
    res.render("contact");
})

router.get("/project", function (req, res) {
    res.render("project");
})



module.exports = router;