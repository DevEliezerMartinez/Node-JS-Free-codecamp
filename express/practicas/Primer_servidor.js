//importación de express
const express = require('express');
const app = express();


//BD--
const {db} = require('./cursos.js')

//routing
app.get('/',(req,res)=>{
   
    res.send('Mi primer servidor con express');

});
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});