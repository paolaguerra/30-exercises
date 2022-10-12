
let TablaDelNumero = prompt("Tabla de multiplicar del numero:");

while (isNaN(TablaDelNumero) || TablaDelNumero === null || TablaDelNumero === "") {
  TablaDelNumero = prompt("Debes introducir un numero valido");
}

for (let i = 0; i < 10; i++) {
  console.log(TablaDelNumero + " x " + i + " = " + TablaDelNumero * i)
}
