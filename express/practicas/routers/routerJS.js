const express = require('express');
const routerProgramacion =  express.Router();

const {programacion}= require('../cursos.js');

routerProgramacion.get('/',(req,res)=>{
   
    res.send('Mi servidor con express con routing');

});



routerProgramacion.get('/:leng',(req,res)=>{
    console.log("func");
    const lenguaje = req.params.leng;

    const resultados = programacion.filter(curso=> curso.lenguaje=== lenguaje );

    if (resultados.length ===0) {
        
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
    // res.send(JSON.stringify(db.lenguaje)) 
}); 

module.exports.routerProgramacion= routerProgramacion;