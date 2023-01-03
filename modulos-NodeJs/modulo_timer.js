mostrarTema = (tema) =>{
    console.log(`Estoy aprendiendo: ${tema}`);
}

sumar=(a,b) =>{
    console.log(a+b);
}
var segundo =0;
contador =() =>{
    
    console.log(segundo);
    segundo++;
}

mostrarTema("Nodejs") 
setTimeout(mostrarTema,2000,"nodeJs") 
console.log("Antes de timeOut");
setTimeout(sumar,2000,12,24);
console.log("Antes de immediate");
setImmediate(mostrarTema,"asíncrono");
console.log("Despues de immediate"); 
console.log("-----");
setInterval(contador,1000)