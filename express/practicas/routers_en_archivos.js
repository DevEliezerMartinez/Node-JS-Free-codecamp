//importación de express
const express = require('express');
const app = express();


//BD--
const {db} = require('./cursos.js');

//import módulos
const routerMates = require('./routers/routerMates.js')
//const routerProgramacion = require('./routers/routerJS')
//routers

//app.use('/api/cursos/programacion',routerProgramacion);
app.use('/api/cursos/matematicas',routerMates);


//routing
app.get('/',(req,res)=>{
   
    res.send('Mi servidor con express con routing');

});



//ejecucion
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});
