var num = 5;
var num2 = -4;
var funcAbsoluto = unNumero => {
  if (unNumero > 0) {
    return unNumero;
  }
  if (unNumero <= 0) {
    return unNumero * -1;
  }
};
funcAbsoluto(num);
funcAbsoluto(num2);
