module.exports = app => {
    const libreria = require("../controllers/libreria.controller.js");
    var router = require("express").Router();
    // crear  un nuevo libro
    router.post("/", libreria.create);

    // Mostrar todos los libros
    router.get("/", libreria.findAll);
    
    // Mostrar un simple libro
    router.get("/:id", libreria.findOne);

    // Update de un libro
    router.put("/", libreria.update);

    // borrar un libro con id
    router.delete("/:id", libreria.delete);

    app.use('/api/libreria', router);

};