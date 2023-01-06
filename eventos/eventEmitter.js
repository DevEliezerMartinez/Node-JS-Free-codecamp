/*-----Manejo de eventos y emitur eventos------ */

// los nombres de clases generalmente empiezan con mayusculas 
const EventEmitter = require('events');

//Nuevo objeto que nos va a permitir emitir eventos
const emisorEventos = new EventEmitter();

//cuando detecte que el evento compra suceda hara =>
emisorEventos.on('compra',(total)=>{
    console.log(`Se realizo una compra con un total de: ${total}`);
});

emisorEventos.emit('compra',50);