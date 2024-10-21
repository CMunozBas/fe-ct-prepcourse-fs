function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let encontrados = [];
  for (let i = 0; i < numeros.length; i++){
    if (encontrados.includes(numeros[i])){
      return numeros[i];
    }
    encontrados.push(numeros[i]);
  }  
  return;
}

module.exports = encontrarElementoRepetido;