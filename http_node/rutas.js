// declaracion de modulos
const htpp = require ('http');
const cursos = require('./cursos.js');
/* console.log(cursos); */

const servidor= htpp.createServer((req,res)=>{
const {method} = req;

    switch(method){
        case 'GET':
            return manejoGET(req,res);
        case 'POST':
            return manejoPost(req,res);
        default:
            console.log(`El metodo: ${method} no puede ser manejado por el servidor  `);
            res.statusCode= 504;
            res.end('El servidor no esta preparado para este método')
            break;
    }

});

servidor.listen(8080, ()=>{
    console.log("A la escucha");
});

manejoGET=(req,res) =>{
    console.log("---Método get");
    const path = req.url;   

    if (path === '/') {
        res.writeHead(200,{'Content-Type':'application/Json'})
        res.statusCode = 200;
        res.end("Bienvenido al routing de Node");
    }else if (path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos));
        console.log(JSON.stringify(cursos));
    }else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.programacion));
        console.log(JSON.stringify(cursos.programacion));
    }
    //res.statusCode= 404;
   // res.end("No existe")
    console.log("Se esta buscando algo que no existe");

    console.log("Método get---");
}

manejoPost = (req,res)=>{
    const path = req.url;

    let cuerpo ='';
    req.on('data',contenido => {
        cuerpo += contenido.toString();

    });

    req.on ('end', ()=>{
        console.log(cuerpo);
        console.log(typeof(cuerpo));
        console.log("entendido");
        console.log();
    });

    if (path === '/cursos/programacion') {
        res.end('se recibio una solicitud post');
        res.statusCode =200;
    }  
}