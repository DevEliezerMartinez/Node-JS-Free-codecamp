const miURL = new URL('http://sanmarcos.guerrero.gob.mx/portal-de-transparencia/');

console.log("Host:"+miURL.host);
console.log("Path Name"+miURL.pathname);
console.log(miURL.searchParams);
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));