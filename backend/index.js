const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

//parse request
app.use(express.json());

// parse request

app.use(express.urlencoded({ extended: true}));

const db = require("./models");
//normal use
//db.sequelize.sync();

//in development
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync.db.");
});

// simple route
app.get("/",  (req, res) => {
    res.json({ message: "Bienvenido a mi libreria aplicacion."});
});

// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});