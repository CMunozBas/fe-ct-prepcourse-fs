function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  console.log(num % 2 === 1);
  return (num % 2 === 1);
}

module.exports = esImpar;

esImpar(12)