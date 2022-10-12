const numero = prompt("Introduce un Numero");

const posiblesDivisores = [];

const divisores = []; 

for (let i = 0; i < numero; i++) {
  posiblesDivisores.push(i+1);
}

for (let i = 0; i < numero; i++) {
  if (numero % posiblesDivisores[i] === 0) {
    divisores.push(posiblesDivisores[i]);
  }
}

console.log(divisores);