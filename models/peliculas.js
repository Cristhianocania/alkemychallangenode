    module.exports = (sequelize,type) => {


        return sequelize.define('pelicula',{

            id:{
 
                type:type.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            imagen:{
                type:type.STRING
            },
            titulo:{
                type:type.STRING
            },
            calificacion:{
                type:type.INTEGER

            }


        })
    }

    /*○ Imagen.
○ Título.
○ Fecha de creación.
○ Calificación (del 1 al 5).
○ Personajes asociados.*/