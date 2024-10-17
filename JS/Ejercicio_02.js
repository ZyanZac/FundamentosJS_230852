//Tipos de Datos en JS

//1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente="Gato Gordo"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente=230852
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

//console.log(`El cliente ha realizado ${NumCompras} en este mes`);



//2. BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False");
let esPremium="No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor /True/ a la variable")
esPremium="True";
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor /True/ a la variable")
esPremium=true;
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium?: ${esPremium}`);
console.log("Cambiando el valor de esPremium a false");

esPremium=0
if (esPremium)
    console.log("El cliente pagó por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos.");



//3. NUMBER (Números)
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");

var cantidad;
const costo_producto=10.50
let saldo_cuenta=-2500.40
let monto_transaccion;

console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato= ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} productos`);
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`);
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//El cliente realiza un abono de: 1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);




//4. STRING (Cadena de Carácteres)
const alumno="Zyanya Ahuachtli Zacatenco Pedroza";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Carácteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

//Inicializamos el valor de la variable producto
producto="MONITOR DE 20\" FULL HD"
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`)

//Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRING usando los métodos y funciones específicos, como convertir su valor a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);




//5. BIGINT (Número de Mayor Amplitud)
console.warn("--- Tipo de Dato - BIGINIT (Número Amplio)");
const numeroGrande=1234567890;
const numeroGrande2=12345678901234567890;
let numeroGrande3=123456789012345678901234567890;
let numeroGrande4=1234567890123456789012345678901234567890;

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que sí es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que sí es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof(numeroGrande4)}`);

numeroGrande3=BigInt(123456789012345678901234567890n);
numeroGrande4=BigInt("1234567890123456789012345678901234567890");

console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`);

//¿Se pueden realizar operaciones matemáticas entre un NUMBER y un BIGINT?
const numero=129;
console.log(`Intentando realizar la suma de: numero+numeroGrande3, el resultado es: ${BigInt(numero)+numeroGrande3}`);




//6. SYMBOL (Símbolo)
console.warn("--- Tipo de Dato SYMBOL (Símbolo o Único)")
//Números son números en JavaScript
//Symbol referencia única en memoria
const numero1=5;
const numero2=5.0;
const numero3="5";
const numero4="5.0";
const numero5=Symbol(5);
const numero6=Symbol(5);
const numero7=Symbol(5.0);
const numero8=Symbol("5");
const numero9=Symbol("5.0");

//Pruebas comparativas
console.log("¿Es 5 = 5.0?");
if(numero1==numero2)
    console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor.")

console.log("¿Es 5 = \"5\"?");
if(numero1==numero3)
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero3, determinando que NO tienen el mismo valor.")

console.log("¿Es 5 === \"5\"?");
if(numero1===numero3) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
    
console.log("¿Es 5 == \"5.0\"?");
if(numero1==numero4) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")

console.log("¿Es 5 === \"5.0\"?");
if(numero1===numero4) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.");
else
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
    
console.log(`¿Es 5 === Symbol(5)? Antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo ${typeof(numero1)} y numero5 del tipo ${typeof(numero5)}`);
if(numero1==numero5) //Estrictamente igual "===" (Equidad) = Mismo valor, mismo tipo de dato.
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor y el mismo tipo de dato.");
else
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")





//7. NULL





//8. FUNCTION




