const cadenaDeNumero = [];

let numero = prompt("Type a number");
while (numero > 0) {
  cadenaDeNumero.push(parseInt(numero));
  numero = prompt("Type a number");
}

let suma = 0;
for (let i = 0; i < cadenaDeNumero.length; i++) {
  suma += cadenaDeNumero[i];
}

function ArrayMedia(cadenaDeNumero) {
  var i = 0,
    suma = 0,
    ArrayLen = cadenaDeNumero.length;
  while (i < ArrayLen) {
    suma = suma + cadenaDeNumero[i++];
  }
  return suma / ArrayLen;
}

var a = ArrayMedia(cadenaDeNumero);

console.log("La media " + a);
console.log("La suma " + suma);
console.log(cadenaDeNumero);
