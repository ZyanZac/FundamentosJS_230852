//

//Estilización de los mensajes de salida
const bg="linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,180,25,1) 86%)";
const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script");

console.log("%c1.- Si/Entonces... (IF)", style_console);
//Le indica al programa que hacer o no en base a una prueba lógica de verdadero o falso

let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`)

//Y si la necesitamos en formato local:
const fechaLocalMX=fechaActual.toLocaleString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

console.log(`En formato local (México): ${fechaLocalMX}`);


//Si es antes de las doce saluda con un "Buenos días".
if(fechaActual.getHours()<12){ //Si sólo se va a utilizar una instrucción, no se utilizan las llaves
    console.log(`Buenos días, hoy es ${fechaLocalMX}`);
}

//Existe un extensor de la sentencia 'if'(si), que es 'else'(en caso contrario)
if(fechaActual.getMonth()<=6){
    console.log(`Estás en la primera mitad del año.`);
} else {
    console.log(`Estás en la segunda mitad del año`);
}


//¿Qué pasa si la validación tiene varias operaciones?
const anio=fechaActual.getFullYear();
let inicioPrimavera=new Date(anio, 2, 21);
let inicioVerano=new Date(anio, 5, 21);
let inicioOtonio=new Date(anio, 8, 23);
let inicioInvierno=new Date(anio, 11, 21);

let horarioVerano=false;
if(fechaActual>=inicioPrimavera || fechaActual<inicioVerano){
    console.log(`Estamos en PRIMAVERA`);
}

