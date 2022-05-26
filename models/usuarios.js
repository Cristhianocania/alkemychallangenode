module.exports = (sequelize,type) => {


    return sequelize.define('usuario',{

        id:{

            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:type.STRING
        },
        mail:{
            type:type.STRING
        },
        password:{
            type:type.STRING
        },
      


    })
}
