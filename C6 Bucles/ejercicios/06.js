function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
num = Math.abs(num);
if (num >= 100 && num <= 999) {
  console.log("true");
  return true;
} else {
console.log ("false");
return false;
}
}

module.exports = tieneTresDigitos;


tieneTresDigitos(22);