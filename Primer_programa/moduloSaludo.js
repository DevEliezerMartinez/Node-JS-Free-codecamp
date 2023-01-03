 /* const saludar = require("./app.js" ); */
// alternativa para solo usar cierta función
const {despedida, saludar} = require("./app.js" );

/* console.log(saludar.saludar("Eliezer:3")); */
console.log(despedida());
console.log(saludar("Eli"));