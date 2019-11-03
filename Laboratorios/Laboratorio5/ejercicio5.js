var palabra = "anona";
var funcPalindromo = unaPalabra => {
  var wordArray = [];
  var esPalindromo = false;

  wordArray = Array.from(unaPalabra);
  wordArrayReverse = Array.from(unaPalabra).reverse();

  if (wordArray.toString() === wordArrayReverse.toString()) {
    esPalindromo = true;
  }
  return esPalindromo;
};
funcPalindromo(palabra);
