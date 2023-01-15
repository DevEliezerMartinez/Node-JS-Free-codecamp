const http = require('http');

const servidor= http.createServer((req,res)=>{
    console.log('***SOLICITUD***');
   /*  console.log(req); */
    /* console.log("Ruta: "+req.url);
    console.log("Método: "+req.method);
    console.log("Headers:"+req.headers);
    res.end('Adios mundo...') */
    //res.send('Hola mundo uwu');


    console.log("***RESPUESTAS***");

    console.log("Codigo: "+res.statusCode);

   res.setHeader('content-type','application/json');
   console.log(res.getHeaders());
    res.end('Adios mundo...');

     
}); 

const puerto= 8080;
servidor.listen(puerto,()=>{
console.log(`Servidor escuchando en el puerto: ${puerto}`);
});