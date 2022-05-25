const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))  //configuracion para que reciba peticiones 

app.get('/', (req,res) => {

    res.send("HOLA MUNDO!!")
}) //prueba ruta raiz 

app.listen(5000, ()  => {

    console.log("Servidor funcionando!!")
})

