module.exports = (sequelize,type) => {


    return sequelize.define('genero',{

        id:{

            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        imagen:{
            type:type.STRING
        },
        nombre:{
            type:type.STRING
        }
        


    })
}

/*○ Nombre.
○ Imagen.
○ Películas o series asociadas.*/