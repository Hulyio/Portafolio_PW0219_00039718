var num = prompt("Prueba a Adivinar un numero");
var funcionAdivina = unNumero => {
  var elArreglo = new Array();
  var resultado = "perdiste";
  for (let index = 0; index < 20; index++) {
    elArreglo.push(Math.floor(Math.random() * 20));
  }
  console.log(elArreglo);
  for (let index = 0; index < elArreglo.length; index++) {
    if (elArreglo[index] == unNumero) {
      resultado = "ganaste";
    }
  }
  return resultado;
};
funcionAdivina(num);
