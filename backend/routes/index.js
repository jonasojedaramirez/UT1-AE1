// simple ruta
application.get("/", (req, res) => {
    res.json({ message: "Bienvenido a libreria aplicacion."});
});

require("./routes/libreria.routes")(app);

// configura puerto, escucha para peticiones
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log('Server esta corriendo en el puerto ${PORT}.');
});