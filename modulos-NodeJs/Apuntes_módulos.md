# Módulos de NodeJs

Dates: January 3, 2023
Topic: NodeJS

## Módulo

Funcionalidad organizada en uno o varios archivos Javascript que puede ser reutilizado en programación

### Ventajas de los módulos

- Evitar la repetición de código
- Reutilizar code

### Importación y exportación de módulos

En los módulos se necesitan exportar e importar los mismos, para re-usarse, en el archivo a exportar se debe añadir lo siguiente 

```jsx
saludar = (Nombre) =>{  return `Hola querido: ${Nombre}`}

//palabra reservada
module.exports.saludar = saludar;

//Donde .saludar es el nombre con el cual lo podremos usar en el otro módulo 
//y saludar despues del = es el nombre de la fúncion acual

//o aún más recomendado podemos modificar directamente el objeto de module.exports
module.exports={
    saludar: saludar,
    despedida: despedida,
 }
```

Ahora para la utilización de dichos módulos deben ser importados de la sig. estructura

```jsx
//se especifica la ruta y el nombre del archivo
const saludar = require("./app.js" ); 

//ahora utlizas el nombre de la var que usaste arriba y solo invocas a través
//del . 
console.log(saludar.saludar("Eliezer:3"));
console.log(saludar.despedida());

//-------------------------------------------------------------------//
//otra alternativa es directamente 
//Desestruracion de modulo

/* const saludar = require("./app.js" ); */
// alternativa para solo usar cierta función
const {despedida, saludar} = require("./app.js" );

/* console.log(saludar.saludar("Eliezer:3")); */
console.log(despedida());
console.log(saludar("Eli"));
```

## Módulos de Nodejs

### Módulo Built-in

Son módulos que ya vienen cargados con Nodejs sin tener que instalarlo como lo son:

- http
- https
- fs(file system)
    
    Contiene funcionalidades para trabajar con el sistema de archivos como Leer,Modificar,Copiar,Eliminar y cambiar de nombre así como el uso de carpetas ademas este modulo funciona con métodos asíncronos pero cuenta con algunos síncronos  que se pueden convertir de la siguiente manera:
    
    ```jsx
    fs.rename()
    
    //version sincrona
    fs.renameSync();
    ```
    
- os (operating system)
    
    Contiene funcionalidad para obtener información sobre el sistema operativo actual
    
- path
- consule
    
    Es un módulo que implementa funcionalidad a la consola de un navegador web  
    
- Process
    
    Provee información sobre el proceso de Nodejs que se esta ejecutando, y puede controlarlo
    
- timers
    
    Contiene funciones que ejecutan código después de cierto periodo de tiempo que tiene como métodos los sig.;
    
    - SetTimeoOut()
        
        Para ejecutar código luego de un número específico de mili-segundos
        
        ```jsx
        setTimeOut(funcion,retraso,argumento1,argumento2)
        ```
        
    - SetImmediate()
        
        Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo mas pronto posible) esto se ejecuta despues del código síncrono 
        
        ```jsx
        setImmediate(funcion,argumento1,argumento2) 
        ```
        
    
    - SetInterval()
        
        Para ejecutar código un número infinito de veces con un retraso especifico en milisegundos
        
        ```jsx
        setInterval(funcion,intervalo,argumento1,argumento2)
        ```