const express = require ("express");
const app = express();
const path = require("path");
const router = require("./routes/router")

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", router);


let port = process.env.PORT || 2000;
app.listen (port, function() {
    console.log("Listening on port " + port);
})
