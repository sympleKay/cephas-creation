const express = require ("express");
const app = express();
const path = require("path");
const router = require("./routes/router")
const port = process.env.port || 2000;


app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.use("/", router);


app.listen (port, function () {
    console.log(`Server started on port ${port}`);
})