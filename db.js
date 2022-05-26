const Sequelize = require ('sequelize');
const peliculaModelo = require('./models/peliculas') //traigo el modelo
const generoModelo =  require('./models/generos')
const personajeModelo = require('./models/personajes')
const usuarioModelo = require('./models/usuarios')


const sequelize = new Sequelize ('sql10495095','sql10495095','sebastian',{

    host:'sql10.freesqldatabase.com	',
    dialect:'mysql'
}); //bdd,username,pass y objeto con diferentes opciones


const pelicula = peliculaModelo (sequelize,Sequelize);
const personaje = personajeModelo (sequelize,Sequelize);
const genero = generoModelo (sequelize,Sequelize);
const usuario = usuarioModelo (sequelize,Sequelize);


sequelize.sync({force:false})

.then(() =>{

    console.log("tablas sincroniazadas")
}

)

module.exports = {

    pelicula,
    personaje,
    genero,
    usuario
}