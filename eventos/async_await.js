function ordenar(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando:  ${producto}`);
    //codigo síncrono
    setTimeout(() => {
      //
      if (producto == "taza") {
        resolve("ordenando una taza");
      } else {
        reject("No esta disponible el producto");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue:  ***${respuesta}***`);
    setTimeout(() => {
      resolve("Gracias por tu compra");
    }, 4000);
  });
}

/* 
ordenar('taza')
.then(respuesta=>{
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
})
.then(respuestaProcesada=>{
    console.log(respuestaProcesada);
})
.catch(error=>{
    console.log(error+" -end");
});
 */
//async await equivalente
//es una funcion tiene cod asincrono y retorna una promesa
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenar(producto);
    console.log("respuesta recibida");
    console.log(`La respuesta recibida es: --->  ${respuesta}`);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada+"***");
  } catch (error) {
    console.log(error);
  }
};

realizarPedido('taza').then(()=>{
    console.log("todo salio muy bien:))");
});

