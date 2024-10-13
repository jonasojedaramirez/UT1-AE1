const db = require("../models");
const Biblioteca = db.biblioteca;
const Op = db.Sequelize.Op;

// Create and Save a new Book
exports.create = (req, res) => {
    //Valida request
    if (!req.body.titulo){
        res.status(400).send({
            message: " Contenido no puede ser vacio"
        });
        return;
    }

    // crear un libro
    const libreria = {
        titulo: req.body.titulo,
        autor: req.body.autor,

    };
    // salva libro en la base de datos
    Libreria.create(libreria)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Algunos errores han ocurrido mientras se creaba libro"
            });
        });
};

//Retrieve all Books fron database
exports.findAll = (req, res) => {
    Libreria.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            message:
            err.message || " Algun error ha ocurrido mientras mostraba libros"
        });
       
};

//Find a single Book with an id
exports.findOne = (req, res) => {
};

//Update a Books by the id in the request
exports.update = (req, res) => {

};

// Delete a book withc the specified id in the request
exports.delete = (req, res) => {

};

