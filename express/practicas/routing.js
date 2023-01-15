//importación de express
const express = require('express');
const app = express();


//BD--
const {db} = require('./cursos.js')

//routing
app.get('/',(req,res)=>{
   
    res.send('Mi servidor con express con routing');

});


app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(db))
});


/* app.get('/api/cursos/programacion',(req,res)=>{
    res.send(JSON.stringify(db.cursos.programacion))
});

app.get('/api/cursos/matematicas',(req,res)=>{
    res.send(JSON.stringify(db.cursos.matematicas))
}); */
 

//o podemos optimizar esto usando parametros de ruta, cambiando el nombre del curso por una var
app.get('/api/cursos/:curso',(req,res)=>{
    const tema = req.params.leng;

    let cons = db.cursos;
    const filtro = cons.filter(area => area.categorias)
    console.log(cons);
    console.log("----------");
    console.log(filtro);
    res.send("okis")
   
   /*  const result = db.cursos.filter(cateagoria => categoria.categorias==="matematicas");
    
   
    console.log("---"+JSON.stringify(result));
    res.send(JSON.stringify(result)); */
    
});

//implementación de varias funciones
/* app.get('/api/cursos/programacion/:leng',(req,res)=>{
    const lenguaje = req.params.leng;
    console.log("Turbo: ~ app.get ~ lenguaje: ", lenguaje);


    const resultados = db.programacion.filter(curso=> curso.lenguaje=== lenguaje );

    if (resultados.length ===0) {
        
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
    /* res.send(JSON.stringify(db.lenguaje)) 
}); */

//ejecucion
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});