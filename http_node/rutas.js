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
            console.log(`El metodo no puede ser manejado por el servidor ${method} `);
    }

});

servidor.listen(8080, ()=>{
    console.log("A la escucha");
});

manejoGET=(req,res) =>{
    const path = req.url;

    if (path === '/') {
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
    res.statusCode= 404;
    res.end("No existe")
}

manejoPost = (req,res)=>{
    const path = req.url;

    if (path === '/cursos/programacion') {
        res.end('se recibio una solicitud post');
        res.statusCode =200;
    }  
}