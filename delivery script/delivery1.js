
const direcionRegistrada = [" 34,Av. intercomunal de Atimano, calle Bizarra"];
let direccion;

let opcion;
opcion=parseInt(prompt('Entrar 1 para la direccion registrada, 2 para ingresar una direccion! '));

switch(opcion){
    case 1:
        alert('Has elegido la direccion registrada: ' + direcionRegistrada);
        break;
    case 2: 
        direccion = prompt('Ingrese su direccion');
        alert('Has ingresado: '+ direccion);
        break
    default:
        alert('Opcion invalida!');
        break

}
