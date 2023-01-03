const fs = require('fs');
//---------Lectura de un archivo
fs.readFile('index_fs.html','utf-8',(err,contenido)=>{
    console.log("Metodo");
   
    if(err){console.log(err); return; }

    console.log("ciclo normal");
    console.log(contenido);
});

//-----------Cambiar nombre 

fs.rename('main_fs.html','index_fs.html',(err)=>{

    if(err){ console.log(err);throw err;}
    console.log("Nombre cambiado con exito");
});


//------agregar contenido al final de un archivo

fs.appendFile('./index_fs.html','<p> holi </p>',(err)=>{

    if(err){ console.log(err);throw err;}
    console.log("Archivo actualizado");

})

//-----Remplazar todo el archivo

fs.writeFile('./index_fs.html','contenido',(err)=>{
    if(err){ console.log(err);throw err;}
    console.log("Contenido remplazado");
})

//----Eliminar un archivo

fs.unlink('./target.txt',(err)=>{
    if(err){ console.log(err);throw err;}

    console.log("archivo eliminado");
});