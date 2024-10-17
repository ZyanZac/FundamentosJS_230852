//Repaso de Arreglos


//Estilización de los mensajes de salida
const bg="linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,121,1) 33%, rgba(255,191,25,1) 86%)";
const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 06: Arreglos en Java Script");

//DECLARACIÓN DE UN ARREGLO
//Para declarar un arreglo (array) de datos en JavaScript, basta agregar [], y dentro los datos que contrendrá el arreglo.
const mesesAnio=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("%c1.- Declaración de un Arreglo (Array)", style_console);

console.log(mesesAnio);
console.table(mesesAnio)

//Acceder a los valores de un arreglo de datos para acceder al valor sólo basta enviar la posición del dato que queremos dentro de los límites establecidos, siento el límite inferior 0 y el superior tamaño -1"

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);

console.log(`El primer mes del año es: ${mesesAnio[0]}`);
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length-1]}`);

//No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido
console.log(`El mes del año en la posición -1 es: ${mesesAnio[-1]}`);
console.log(`El terceravo mes del año es: ${mesesAnio[12]}`);

console.log(`¿Qué tipo de dato es un arreglo? ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje débilmente tipado, podremos crear arreglos mixtos de tipos de Datos

console.log("Declarando un Arreglo Mixto");

const saludar=function(nombre){return `Hola, ${nombre}`}
let arregloMixto=["String", 5, 45.26, -200, -.16854, Symbol("MARH"), 'z', false, BigInt(1111111112222222233333344444555555666667777777777), true, {latitud: "20°18'0\" N", longitud: "97°58'00\" W", altitud: 796}, saludar, null]

//Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")
console.log(`El dato en la posición [0] = ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`)
console.log(`El dato en la posición [1] = ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`)
console.log(`El dato en la posición [2] = ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`)
console.log(`El dato en la posición [3] = ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`)
console.log(`El dato en la posición [4] = ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`)
console.log(`El dato en la posición [5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`)
console.log(`El dato en la posición [6] = ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`)
console.log(`El dato en la posición [7] = ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`)
console.log(`El dato en la posición [8] = ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`)
console.log(`El dato en la posición [9] = ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`)
console.log(`El dato en la posición [10] = ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`)
console.log(`El dato en la posición [11] = ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`)
console.log(`El dato en la posición [12] = ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`)



console.log("%c3.- Arreglos Multidimensionales (Matrices)", style_console);

console.log("Declarando una matriz regular.")
//Una matriz es una estructura de datos multidimensional (tabla) de n columnas o m filas

let matriz=[[1,2,3,4], ['a', 'b', 'c', 'd']]
//Esta es una matriz regular de 4x4
console.log(matriz)
console.table(matriz)

console.log("Declarando una matriz irregular");

const matrizIrregular=[["Juan", "Pedro", "María", "Inés"], [true, false, null], [9.2]];

console.log(matrizIrregular);
console.table(matrizIrregular);


//Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular");
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elemento en la posición [1][1]: ${matriz[1][1]}`);
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`);

//Accediento a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular");
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(`Elemento en la posición [1][2], ¿es María mayor de edad?: ${matrizIrregular[1][2]}`);
console.log(`Elemento en la posición [2][0], promedio de Juan: ${matrizIrregular[2][0]}`);


//Funciones y Métodos de Arreglos
//Los métodos de un Objeto generalmente siempre son invocados usando un . y al término de delimitan los parámetros entre (). En caso de que no lleve (), no es un método, sino una propiedad


console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methods or Array Functions", style_console);

console.log("¿Cómo saber cuál es el tamaño de un arreglo?");
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)

console.log(`¿Qué pasa con los multidimensionales?`)
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`) //Recibe el número de filas

console.log("Mmm, eso me da el tamaño de número de filas de la matriz, pero, ¿cómo saber el número de columnas?")
console.log(`matriz tiene un número de: ${matriz[0].length}`)
console.log("¿Y para las irregulares?");

//Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas=matrizIrregular.length
for(let i=0; i<numeroFilas; i++)
    console.log(`La longitud de la fila ${[i]} es: ${[matrizIrregular[i].length]}`)


 

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

let estudiantes=["Gato Gordo", "Miausito", "Gatote", "Miausón"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes);
console.log("Agregamos a un nuevo estudiante llamado: Gatuno");
estudiantes.push("Gatuno");
console.log("Después de agregarla los elementos del arreglo son: ")
console.table(estudiantes);

console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento");
arregloMixto.push("Hola");
console.log("Y también agregamos el número -2354353459036783987465873.2342423897990 siendo éste un BigInt");
arregloMixto.push(BigInt(-2354353459036783987465873.2342423897990));
console.log("Después de estas dos operaciones, el arreglo queda con los siguientes elementos:");
console.table(arregloMixto);




console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial.", style_console);

console.table(estudiantes);
console.log("Ahora agregaremos a Gatóm, al comienzo de arreglo.");
estudiantes.unshift("Gatóm");
console.log("La lista actual es: ")
console.table(estudiantes);




console.log("%c7.- Eliminar el elemento de un arreglo en la última posición (POP)", style_console);

console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes)
console.log("Para este caso, eliminaremos a Gatuno, en la última posición");
estudiantes.pop();
console.log("Después de eliminar el elemento del arreglo quedó de la siguiente manera: ");
console.table(estudiantes);




console.log("%c8.- Eliminar el elemento de un arreglo en la primera posición (SHIFT)", style_console);

console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes)
console.log("Para este caso, eliminaremos a Gatóm, en la última posición");
estudiantes.shift();
console.log("Después de eliminar el elemento del arreglo quedó de la siguiente manera: ");
console.table(estudiantes);




console.log("%c9.- Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);

console.log("El arreglo original tiene los elementos: ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición");
//Cuando la función splice recibe un sólo parámetro eliminará los elementos de esa posición en adelante
estudiantes.splice(2); //Con dos parámetros se eliminan en inicio y fin
console.table(estudiantes);

//CUando la función splice recibe dos parámetros, elimina todos los elementos que no estén en ese rango

estudiantes.push("Gatóm")
estudiantes.push("Miausón")
estudiantes.push("Gatunote")
estudiantes.push("Miausote")
estudiantes.push("Gatomo")
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos suficientes para aplicar el método splice con dos parámetros que serán: 3, 5");
estudiantes.splice(3, 2);
console.log("Resultando en: ");
console.table(estudiantes);

//Splice sirve también para insertar elementos en posiciones específicas, ahora necesitamos insertar a: "Gatonto" entre "Gato Gordo" y "Miausito"
console.log("Ahora vamos a insertar a \"Gatonto\" entre los elementos de la posición 0 y 1.")
estudiantes.splice(1, 0, "Gatonto")
console.table(estudiantes)

//También splice sirve para reemplazar elementos por otros, en este caso reemplazaremos a "Gato Gordo" por "Gatejo"
console.log("Ahora vamos a reemplazar a \"Gato Gordo\" por \"Gatejo\".")
estudiantes.splice(0, 1, "Gatejo")
console.table(estudiantes);




console.log("%c10.- Métodos para la manipulación de Arreglos INMUTABLES", style_console);

let signosZodiacales=["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"]

//Desestructuración de Arreglos (Objetos)

let [signo1, ,signo3, , , , signo7, , , , , ] = signosZodiacales;
console.log(`El primer signo zodiacal es: ${signo1}`)
console.log(`El primer signo zodiacal es: ${signo3}`)
console.log(`El primer signo zodiacal es: ${signo7}`)

//Congelamos el arreglo volviéndolo INMUTABLE
Object.freeze(signosZodiacales)




//Filtrado de Datos
console.log("%c11.- Filtrado de Elementos dentro de un arreglo utilizando el método FILTER.", style_console);

console.table(estudiantes);

//Antes de filtrar datos llenemos el arreglo con 10 elementos.
estudiantes.push("Miausino");
estudiantes.push("Gatonto");
estudiantes.push("Mewo");
estudiantes.push("Miwo");
console.table(estudiantes);

//Filtrar es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable.


Object.freeze(estudiantes);

console.log("Filtrando los primeros 5 elementos")
let nuevoEstudiantes=estudiantes.filter((estudiante, index)=>index<5); //Estudiante es la iteración, index es la posición en la que está
console.table(nuevoEstudiantes);


//Intentamos modificar el arreglo inmutable
//estudiantes.pop();
//console.table(estudiantes);


//Intentamos modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Miwo");
console.table(nuevoEstudiantes);
console.table(filtraPrimeros5(estudiantes));


//FILTER es lo mismo que hacer la siguiente función:
function filtraPrimeros5(arregloEstudiantes){
    let listaFiltrada=[];
    for(let i=0; i<5; i++){
        listaFiltrada.push(arregloEstudiantes[i]);
    }
    return listaFiltrada;
}



//Filtrar a los estudiantes que su nombre tenga más de 15 carácteres
let nuevoEstudiantesNombre=estudiantes.filter((estudiante)=>estudiante.length>7);
console.table(nuevoEstudiantesNombre);



//Filtrado de Datos
console.log("%c12- Filtrado de Elementos dentro de un arreglo utilizando el método MAP.", style_console);

console.log("Imprimimos los elementos actuales de signosZodiacales:")
console.table(signosZodiacales);
//Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYÚSCULAS
console.table(signosZodiacales.map(signoZodiacal=>signoZodiacal.toUpperCase()));

//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticas o cuantitátivas a un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado.

const costosListaCompras=[15, 52.50, 16.90, 32.50, 28, 105, 45.2, 94.10]
//¿Cómo podemos calcular el total de una lista de costos de un carrito de compras?

console.log("Los precios son: ")
console.table(costosListaCompras);
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio)=>total+precio, 0).toFixed(1)}`)




