function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let caracteres = texto.split('');
  let caracteresInvertidos = caracteres.reverse();
  let invertido = caracteresInvertidos.join('');
  return invertido;
}

module.exports = invertirTexto;
