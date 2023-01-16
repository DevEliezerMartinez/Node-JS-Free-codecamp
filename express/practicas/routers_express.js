//importación de express
const express = require('express');
const app = express();


//BD--
const {db} = require('./cursos.js')

//routing
app.get('/',(req,res)=>{
   
    res.send('Mi servidor con express con routing');

});

//routers
const routerProgramacion =  express.Router();
app.use('/api/cursos/programacion',routerProgramacion);

const routerMates = express.Router();
app.use('/api/cursos/matematicas',routerMates);




//--Anteriormente usabamos=>

/* app.get('/api/cursos/programacion/:leng',(req,res)=>{
  funcion
}); */   

//ahora podemos acortar todo el parametro que usabamos de ruta
routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(db.programacion));
});



//2da funcion
routerProgramacion.get('/:leng',(req,res)=>{
    console.log("func");
    const lenguaje = req.params.leng;

    const resultados = db.programacion.filter(curso=> curso.lenguaje=== lenguaje );

    if (resultados.length ===0) {
        
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
    // res.send(JSON.stringify(db.lenguaje)) 
}); 

//mates

routerMates.get('/',(req,res)=>{
    console.log("ruta Matematicas");
    res.send(db.matematicas)
});

routerMates.get('/:tema',(req,res)=>{
    console.log("ruta con parametros");
    
    const tema = req.params.tema;
    const resultados = db.matematicas.filter(curso=> curso.tema=== tema );

    if (resultados.length ===0) {
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
});


//ejecucion
const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});
