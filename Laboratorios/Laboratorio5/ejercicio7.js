var num = 4;

var fibonacci = unNumero => {
  if (unNumero > 1) {
    return fibonacci(unNumero - 1) + fibonacci(unNumero - 2); //función recursiva
  } else if (unNumero == 1) {
    // caso base
    return 1;
  } else if (unNumero == 0) {
    // caso base
    return 0;
  }
};
fibonacci(num);
