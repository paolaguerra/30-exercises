let arrayDeNumeros = [];

let primerNumero = prompt("ingrese el primer numero");
arrayDeNumeros.push(primerNumero);
while (isNaN(primerNumero) || primerNumero === null || primerNumero === "") {
  primerNumero = prompt("Debes introducir un numero valido");
}

let segundoNumero = prompt("ingrese el segundo numero");
arrayDeNumeros.push(segundoNumero);
while (isNaN(segundoNumero) || segundoNumero === null || segundoNumero === "") {
  segundoNumero = prompt("Debes introducir un numero valido");
}

let tercerNumero = prompt("ingrese el tercer numero");
arrayDeNumeros.push(tercerNumero);
while (isNaN(tercerNumero) || tercerNumero === null || tercerNumero === "") {
  tercerNumero = prompt("Debes introducir un numero valido");
}

let cuartoNumero = prompt("ingrese el cuarto numero");
arrayDeNumeros.push(cuartoNumero);
while (isNaN(cuartoNumero) || cuartoNumero === null || cuartoNumero === "") {
  cuartoNumero = prompt("Debes introducir un numero valido");
}

let quintoNumero = prompt("ingrese el quinto numero");
arrayDeNumeros.push(quintoNumero);
while (isNaN(quintoNumero) || quintoNumero === null || quintoNumero === "") {
  quintoNumero = prompt("Debes introducir un numero valido");
}

let sextoNumero = prompt("ingrese el sexto numero");
arrayDeNumeros.push(sextoNumero);
while (isNaN(sextoNumero) || sextoNumero === null || sextoNumero === "") {
  sextoNumero = prompt("Debes introducir un numero valido");
}

arrayDeNumeros.sort();
console.log(arrayDeNumeros.length + " Elementos ");
// document.write(arrayDeNumeros);
// arrayDeNumeros.reverse();
console.log(arrayDeNumeros);

let numeroUsuario = prompt("Cual numero deseas buscar?");
let incluyeOnoElNumero = arrayDeNumeros.includes(numeroUsuario);
console.log(incluyeOnoElNumero);


