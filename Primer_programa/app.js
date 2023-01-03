
saludar = (Nombre) =>{  return `Hola querido: ${Nombre}`}

despedida = ()=>{ return `Adios, vuelve pronto:3`}


 /* module.exports.saludar = saludar;
 module.exports.despedida=despedida; */

 //altenative to export manual on next way

 module.exports={
    saludar: saludar,
    despedida: despedida,
 }

/*  console.log(module.exports);  */