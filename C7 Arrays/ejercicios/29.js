function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código
  if (numeros.length === 0){
    return null;
  }
  let ordenados = numeros.sort((a, b) => a - b);
  for (let i = 0; i < ordenados.length; i++){
    let numMax = Math.max(...numeros);
    let esperado = (numMax * (numMax + 1)) / 2;
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let numeroFaltante = esperado - suma;
    return numeroFaltante > 0 ? numeroFaltante : null;
  }
}

module.exports = encontrarNumeroFaltante;