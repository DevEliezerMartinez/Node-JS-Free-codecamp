const promesaCumplida= false;

const promesa = new Promise((resolve,reject)=>{

    setTimeout(() => {
        if(promesaCumplida){
            resolve('Promesa cumplida');
            return;
        } else{
            reject('Promesa rechazada...');
        }
        
        
       
    }, 2000);
});


// cumplida
const ManejopromesaCumplida = (valor)=>{
    console.log(valor);
};
//rechazo
const ManejopromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo);
};


promesa.then(ManejopromesaCumplida, ManejopromesaRechazada);