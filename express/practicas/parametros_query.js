//importación de express
const express = require('express');
const app = express();


//BD--
const {db} = require('./cursos.js')



app.get('/api/cursos/programacion/:leng',(req,res)=>{
    const lenguaje = req.params.leng;
    const resultados = db.programacion.filter(curso=> curso.lenguaje=== lenguaje );

    if (resultados.length ===0) {
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }
    if (req.query.orden=== 'vistas') {
        console.log("Ordenado");
       return res.send(JSON.stringify(resultados.sort((a,b)=>{a.vistas-b.vistas})));
       
    }
    console.log("params: "+req.query.orden);
    res.send(JSON.stringify(resultados));
    // res.send(JSON.stringify(db.lenguaje)) 
});   


//ejecucion
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});