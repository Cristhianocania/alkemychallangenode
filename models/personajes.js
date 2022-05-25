module.exports = (sequelize,type) => {


    return sequelize.define('personaje',{

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
        },
        edad:{
            type:type.INTEGER

        },
        historia:{
            type:type.STRING
        }


    })
}
/*○ Imagen.
○ Nombre.
○ Edad.
○ Peso.
○ Historia.
○ Películas o series asociadas.*/