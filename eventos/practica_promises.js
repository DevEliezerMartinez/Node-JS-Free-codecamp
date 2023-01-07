

const statuspedido = ()=>{
    const status = Math.random()< 0.1;
    return status;
};



const mipedido = new Promise ((resolve,reject)=>{
    
    setTimeout(() => {
        if (statuspedido) {
            resolve('Pedido exitoso!');
            return
            
        }else{
            reject('Ocurrio un error intente nuevamente');
        }
        
    }, 2000);
});

/*     const manejarPedido=(mensajeConfirmacion)=>{
        console.log(mensajeConfirmacion);
    };

    const RechazarPedido=(mensajeError)=>{
        console.log(mensajeError);
    };
mipedido.then(manejarPedido,RechazarPedido);
 */


mipedido
.then((mensajeConfirmacion)=>{
    console.log(mensajeConfirmacion);
})
.catch((mensajeError)=>{
    console.log(mensajeError);
});

// se puede indexar mejor
mipedido
.then(mensajeConfirmacion)
.catch(mensajeError);

