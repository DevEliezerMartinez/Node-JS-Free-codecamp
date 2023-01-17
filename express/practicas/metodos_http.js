//importación de express
const express = require('express');
const app = express();


//BD--
const {programacion} = require('./cursos.js').infoCurso;



//routers
const routerProgramacion =  express.Router();
app.use('/api/cursos/programacion',routerProgramacion);

//midleware
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(programacion));
    console.log("Get con routing funcionando");
});


//2da funcion
routerProgramacion.get('/:leng',(req,res)=>{
    
    const lenguaje = req.params.leng;
    const resultados = programacion.filter(curso=> curso.lenguaje=== lenguaje );
    if (resultados.length ===0) {
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }
    res.send(JSON.stringify(resultados));
    console.log("Get con filter funcionando");
}); 

routerProgramacion.post('/post',(req,res)=>{
  
    /* res.send("Posst funcionando") */
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion))
    console.log("POST funcionando");

});

routerProgramacion.put('/put/:id',(req,res)=>{
    const cursoActualizado = req.body;
    const idParam = req.params.id;

//
const indice=programacion.findIndex(curso => curso.id == idParam);
if (indice>=0) {
    programacion[indice]= cursoActualizado;
    
}
res.send(JSON.stringify(programacion))
//
console.log("put funcionando");

});

routerProgramacion.patch('/patch/:id',(req,res)=>{
    const infoActualizada = req.body;
    const idParam = req.params.id;

    const indice = programacion.findIndex(curso=> curso.id == idParam);

    if (indice>=0) {
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar,infoActualizada);
        res.send(JSON.stringify(programacion));
    }
    console.log("patch funcionando");
});

routerProgramacion.delete('/delete/:id',(req,res)=>{
    const idParam = req.params.id;
    const indice = programacion.findIndex(curso=> curso.id == idParam);

    if (indice>=0) {
        programacion.splice(indice,1)
        res.send(JSON.stringify(programacion));
    }
    console.log("delete funcionando");

});

//ejecucion
const PUERTO = process.env.PORT || 8080;
app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto:  ${PUERTO}`);
});
