const express = require('express');
const routerMates = express.Router();

const {matematicas}= require('../cursos.js') ;


routerMates.get('/',(req,res)=>{
    console.log("ruta Matematicas");
    res.send(matematicas)
});

routerMates.get('/:tema',(req,res)=>{
    console.log("ruta con parametros");
    
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso=> curso.tema=== tema );

    if (resultados.length ===0) {
        return res.status(404).send(`no se encontraron cursos del lenguaje de: ${lenguaje}`)
    }

    res.send(JSON.stringify(resultados));
});

module.exports= routerMates;