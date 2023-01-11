const miURL = new URL('https://ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.host);
console.log(miURL.pathname);
console.log(miURL.searchParams);
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));