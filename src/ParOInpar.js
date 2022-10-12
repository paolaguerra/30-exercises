let parOinpar = prompt("agregar un valor");

while (isNaN(parOinpar) || parOinpar === null || parOinpar === "") {
  parOinpar = prompt("Debes introducir un valor");
}
if (parOinpar % 2 === 0) {
  console.log(parOinpar + " es par");
} else {
  console.log(parOinpar + " es inpar");
}
