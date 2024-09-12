function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "i dioma" es "aleman", devuelve "GutenTag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if (idioma === "aleman") {
    console.log("Guten Tag!");
    return "Guten Tag!";
  }else if (idioma === "mandarin") {
    console.log("Ni Hao!");
    return "Ni Hao!";
  }else if (idioma === "ingles") {
    console.log("Hello!");
    return "Hello!";
  }else {
    console.log("Hola!");
    return "Hola!";
  }
}


module.exports = saludo;


