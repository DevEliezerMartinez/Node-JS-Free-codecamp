const http = require('http');

const servidor= http.createServer((req,res)=>{
    //proceso
    console.log("solicitud nueva");
    res.end('Hola mundooo uwu');
}); 

const puerto= 8080;
servidor.listen(puerto,()=>{
console.log(`Servidor escuchando en el puerto: ${puerto}`);
});