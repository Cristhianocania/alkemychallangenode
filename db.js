const Sequelize = require ('sequelize');
const peliculaModelo = require('./models/peliculas') 
const generoModelo =  require('./models/generos')
const personajeModelo = require('./models/personajes')
const usuarioModelo = require('./models/usuarios')


const sequelize = new Sequelize ('sql3495487','sql3495487','AN5AhPCw41',{

    host:'sql3.freesqldatabase.com',
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