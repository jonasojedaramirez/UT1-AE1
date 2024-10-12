module.exports = (sequelize, Sequelize) => {
    const Biblioteca = sequelize.define("biblioteca",{
        titulo: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        }
    });
}