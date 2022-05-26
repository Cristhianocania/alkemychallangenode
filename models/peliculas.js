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
                type:type.ENUM[1,2,3,4,5]

            }


        })
    }

    /*○ Imagen.
○ Título.
○ Fecha de creación.
○ Calificación (del 1 al 5).
○ Personajes asociados.*/