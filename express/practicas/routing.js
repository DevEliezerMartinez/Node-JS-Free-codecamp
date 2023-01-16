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


app.get('/api/cursos/programacion',(req,res)=>{
    res.send(JSON.stringify(db.programacion))
});

app.get('/api/cursos/matematicas',(req,res)=>{
    res.send(JSON.stringify(db.matematicas))
});
 
//------RECUERDA ARREGLAR ESTO
//o podemos optimizar esto usando parametros de ruta, cambiando el nombre del curso por una var
/* app.get('/api/cursos/:curso',(req,res)=>{
    const tema = req.params.leng;

    const dbOriginal= db;
    
    console.log(dbOriginal.progra.nombre);
        
    
    
   
    res.send("ok")
    
}); */

//implementación de varias funciones
 app.get('/api/cursos/programacion/:leng',(req,res)=>{
    const lenguaje = req.params.leng;

    const resultados = db.programacion.filter(curso=> curso.lenguaje=== lenguaje );

    if (resultados.length ===0) {
        
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
    // res.send(JSON.stringify(db.lenguaje)) 
}); 

    //Implementación cursos matematicas
    app.get('/api/cursos/matematicas/:tema',(req,res)=>{
        const busqueda = req.params.tema;
       

        const cursosFiltrados = db.matematicas.filter(curso=> curso.tema=== busqueda);

        if (cursosFiltrados.length ===0) {
            return res.status(404).send(`no se encontraron cursos del tema de: ${busqueda}`)
        }

        res.send(JSON.stringify(cursosFiltrados));


    });

    //doble busqueda

    app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{

        const lenguajeC = req.params.lenguaje;
        const nivelC = req.params.nivel;

        const cursosFiltrados = db.programacion.filter(curso => curso.lenguaje=== lenguajeC && curso.nivel ===nivelC);
        if (cursosFiltrados.length ===0) {
            return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguajeC} de nivel: ${nivelC}` )
        }
        res.send(JSON.stringify(cursosFiltrados));

    });


//ejecucion
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});