let primerNumero = prompt("ingrese el primer numero");

while (isNaN(primerNumero) || primerNumero === null || primerNumero === "") {
  primerNumero = prompt("Debes introducir un numero valido");
}

primerNumero = parseInt(primerNumero);

let segundoNumero = prompt("ingrese el segundo numero");

while (isNaN(segundoNumero) || segundoNumero === null || segundoNumero === "") {
  segundoNumero = prompt("Debes introducir un numero valido");
}

segundoNumero = parseInt(segundoNumero);

console.log("Multiplicacion: " + primerNumero + " x " + segundoNumero + " = " + (primerNumero * segundoNumero));
console.log("Division: " + primerNumero + " / " + segundoNumero + " = " + (primerNumero / segundoNumero));
console.log("Suma: " + primerNumero + " + " + segundoNumero + " = " + (primerNumero + segundoNumero));
console.log("Resta: " + primerNumero + " - " + segundoNumero + " = " + (primerNumero - segundoNumero));