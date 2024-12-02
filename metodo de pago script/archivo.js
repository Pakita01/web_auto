const referenciaGuardada = 123; // Reemplaza con la referencia correcta
const montoGuardado = 10;     // Reemplaza con el monto correcto
let referenciaCorrecta = false;
let montoCorrecto = false;
let metodoPago = '';

while (!montoCorrecto) {
  if (!metodoPago) { // Si no se ha seleccionado un método de pago
    metodoPago = prompt("Selecciona un método de pago: \" 1 \" para pago móvil o \" 2 \"para transferencia");
    if (!(metodoPago.toLowerCase() === "1" || metodoPago.toLowerCase() === "2")) {
      alert("Método de pago inválido. Por favor, selecciona\" 1 \" para pago móvil o \" 2 \"para transferencia");
      continue; //Vuelve al inicio del bucle
    }
    alert("Has seleccionado: " + metodoPago);
  }

  if (!referenciaCorrecta) {
    let referenciaUsuario = parseInt(prompt("Introduce la referencia:"));
    if (referenciaUsuario === referenciaGuardada) {
      referenciaCorrecta = true;
    } else {
      let otroMetodo = confirm("Referencia inválida. ¿Deseas cambiar de método de pago? (Aceptar = Sí, Cancelar = No)");
      if (otroMetodo) {
        metodoPago = prompt("Selecciona un método de pago: \" 1 \" para pago móvil o \" 2 \"para transferencia");
        if (!(metodoPago.toLowerCase() === "1" || metodoPago.toLowerCase() === "2")) {
          alert("Método de pago inválido. Por favor, selecciona \" 1 \" para pago móvil o \" 2 \"para transferencia");
          continue; //Vuelve al inicio del bucle
        }
        alert("Has seleccionado: " + metodoPago);
        referenciaCorrecta = false; // Reinicia para que vuelva a pedir la referencia
      } else {
        continue; // Continua con el mismo método de pago
      }
    }
  }

  if (referenciaCorrecta) {
    let montoUsuario = parseFloat(prompt("Introduce el monto:"));
    if (montoUsuario === montoGuardado) {
      montoCorrecto = true;
      alert("¡Pago exitoso!");
    } else {
      let otroMetodo = confirm("Monto inválido. ¿Deseas cambiar de método de pago? (Aceptar = Sí, Cancelar = No)");
      if (otroMetodo) {
        metodoPago = prompt("Selecciona un método de pago: \" 1 \" para pago móvil o \" 2 \"para transferencia");
        if (!(metodoPago.toLowerCase() === "1" || metodoPago.toLowerCase() === "2")) {
          alert("Método de pago inválido. Por favor, selecciona  \" 1 \" para pago móvil o \" 2 \"para transferencia");
          continue; //Vuelve al inicio del bucle
        }
        alert("Has seleccionado: " + metodoPago);
        referenciaCorrecta = false; // Reinicia para que vuelva a pedir la referencia
      } else {
        continue; // Continua con el mismo método de pago
      }
    }
  }
}