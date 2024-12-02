let numeroGanador1 = 7;
let numeroGanador2 = 5;

// Parte 1
let intento1 = parseInt(prompt(" - Intento 1: Ingresa un número:"));
let intento2 = parseInt(prompt(" - Intento 2: Ingresa un segundo número:"));

if (intento1 === numeroGanador1 || intento1 === numeroGanador2 || intento2 === numeroGanador1 || intento2 === numeroGanador2) {
  alert("¡Ganaste! .");
} 
else {
  alert("Perdiste! ");

  // Parte 2
  let intentosParte2 = 4;//iniciamos con 4 intentos
  let numeroAdivinar = 7; 
  let numeroIngresado;

  while (intentosParte2 > 0) {
    numeroIngresado = parseInt(prompt(` Te queda ${intentosParte2} Intento: Ingresa un número:`));
    if (numeroIngresado === numeroAdivinar) {
      alert("¡Ganaste!");
      break; 
    } 
    else {
      alert("Intento fallido.");
      intentosParte2--;
    }}
    if (intentosParte2 <= 0) {
    alert("Perdiste . El juego ha terminado.");
        }
}
