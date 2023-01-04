//una opcion para trabajar podria ser con require 

const curso = require("./primer_json.json");
/* console.log(typeof curso);
console.log("index.js:4 Variable: curso", curso)
console.log(curso.titulo+" "+curso.temas); */

//para convertir un objeto de js a json

let infoCurso= {
    "titulo": "aprende node js",
    "numVista": 505,
    "numLikes": 500,
    "temas": ["Javascript", "node"],
    "visible": true
}
//cadena de caraacteres en formaro json   objeto---> cadena de texto jsnon
let Json_curso = JSON.stringify(infoCurso)
/* console.log(typeof Json_curso);
console.log("🚀 ~ file: index.js:19 ~ Json_curso", Json_curso) */

// texto plano json a objeto


let objetoConvertido = JSON.parse(Json_curso);
console.log(typeof objetoConvertido);
console.log("Turbo: ~ file: index.js:26 ~ objetoConvertido", objetoConvertido);
console.log(objetoConvertido.titulo);
