# Introducción a npm

Dates: January 4, 2023
Topic: NodeJS

# Npm

Es el archivo de software mas grande del mundo que contiene paquetes de NodeJs , como también una linea de comandos

## Paquetes

Un paquete es un archivo o carpeta descrito por archivo package.json  

VS

## Módulo

Cualquier Archivo o directorio en el directorio node_modules que puede ser importado con require()

## Dependencia

Es un paquete que otro paquete necesita para funcionar correctamente 

## JSON -Javascript Object Notation

Es un formato de texto para almacenar información, basado en la notación de objetos de javascript el cual nos permite almacenar objetos Js como texto, su formato esta principalmente escrito de la siguiente forma:

```jsx
{
"titulo": "Aprende nodeJs",

"numeroVistas": 242,

"temas":["node","javascript"],

"visible": true;
}
```

En el que las claves deben ser cadenas de caracteres, mientras que los valores cambiaran debido a su tipo.

## Conversión de json

La ventaja de json es que permite una forma de comunicación muy practica al ser un formato muy fácil de entender por varios lenguajes, puede ser convertido de un objeto de js a un json o viceversa un json a un objeto de js a través de los siguientes comandos:

### JSON a Objeto

```jsx
const curso = require("./primer_json.json");
console.log(curso.titulo+" "+curso.temas); 
```

### objeto a json

```jsx
let infoCurso= {
    "titulo": "aprende node js",
    "numVista": 505,
    "numLikes": 500,
    "temas": ["Javascript", "node"],
    "visible": true
}

let Json_curso = JSON.stringify(infoCurso);
console.log(typeof Json_curso);
console.log(Json_curso) 
```

## Creación de paquetes de node (NPM)

Para la creación de un paquete de npm es necesario usar la terminal, donde obviamente tengamos npm instalado, y ejecutar

```jsx
npm init;
```

Esto creara un archivo package.json con varios detaller acerca del paquete como nombre version autor, las dependencias que requiere etc. quedando de la sig forma

```jsx
{
  "name": "practica2", //nombre del proyecto
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": { //debugging
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Eliezer Martinez",
  "license": "ISC",
  "dependencies": { //depencias que ocupa
    "express": "^4.18.2"
  }
}
```

### Instalación de paquetes:

Para instalar algun otro paquete o dependencia se necesita saber el nombre de ese paquete que se puede buscar en la pagina oficial [https://www.npmjs.com/](https://www.npmjs.com/) y una vez conocemos el nombre del paquete podemos proseguir a instalarlo:

```bash
npm install express
// o si se necesita una version especifica

npm install express@4.15.1
```

aunque también existen dependecias que solo son requeridas cuando se desarrolla,no cuando la app esta en uso y para esto se tiene las DevDependices que pueden separarse independientemente, esto con:

```bash
npm install s-age --save-dev
```

### Desinstalación de paquetes

Si ya no se llega a necesitar una dependencia se puede borrar de la siguiente forma:

```bash
npm uninstall express
```

### Package -lock.json

Se genera automaticamente cuando npm modifica el árbol de node_modules o package.json, mantiene un registro para poder instalarlo despues con el mismo numero de depencias