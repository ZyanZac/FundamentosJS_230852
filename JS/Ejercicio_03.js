//Repaso de Objetos

const bg="linear-gradient(11deg, rgba(2, 0, 26, 1) 0%, rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1)86%)";
const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`

//Personalización de las Salidad a Consola
console.warn("--- Práctica 05: Repaso de Objetos en JavaScript");


//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

//Declaramos valores independientes relacionados a un PRODUCTO
let Producto_Nombre="Computadora Gamer Laptop 17\"";
let Producto_Marca="ASUS";
let Producto_Modelo="TUF 17";
let Producto_Precio=15749.50;
let Producto_Disponibilidad=true;
let Producto_SKU=Symbol("TUF707VV-HX221W"); 
let Producto_Stock=15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias=["Electrónicos", "Computación", "Gaming", "Promociones Buen Fin", "Mejor Valor"];

//Accedemos a los valores actuales de las características del producto independiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato: <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato: <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato: <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato: <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato: <${typeof(Producto_Disponibilidad)}> 
    Stock: ${Producto_Stock}, Tipo de Dato: <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato: <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato: <${typeof(Producto_Imagen)}>
    Categorías: ${Producto_Categorias}, Tipo de Dato: <${typeof(Producto_Categorias)}>
    `)

    console.log("En el caso del SKU, al ser un Symbol,  no se puede concatenar a la cadena de impresión anteior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));


//Ahora lo declaramos como un OBJETO
console.log("%c2.- Objetos", style_console);

let Producto={
    Nombre:"Tenis Deportivos",
    Marca:"Nike",
    Modelo:"Jordan '24",
    Precio:3361.25,
    Diponibilidad:false,
    Stock:0,
    SKU:"DZ5485-612",
    Imagen:"../Assets/Products/Sneakers/JORDAN.png",
    Barcode:null,
    Categorias:["Deportes", "Tenis", "Juvenil"]
}

//Ahora leemos el objeto completo
console.table(Producto)


//Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.
console.log("Accediendo a propiedades específicas del PRODUCTO");
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Diponibilidad==0)
    console.log(`Estatus: Agotado`)
else
    console.log(`Estatus: ${Producto.Stock} unidades disponibles.`)



//Desestructuración de Objetos.

console.log("%c3.- Desestructuración de Objetos", style_console);

let Producto2={
    Clave:316,
    Nombre:"Lentes para Sol",
    Marca:"Oakley",
    Modelo:"QNTM Kato",
    Precio:6829.00,
    Diponibilidad:true,
    Stock:5,
    SKU:"OO9481D-0356",
    Imagen:"../Assets/Products/Sunglasses/KatoRed.png",
    Barcode:888392491626,
    Categorias:["Deportes", "Lentes", "Hombre", "Accesorios"]
}

let Comprador={
    Clave:3216,
    Nombre:"Gato",
    Apellidos: "Gordo",
    Tipo:"Frecuente",
    Correo:"gatilloGordo@gatito.com",
    PaisOrigen: "México",
    SaldoActual:14000.00
}

let Pedido={
    Producto_Clave: 316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus:"Carrito de Compras"
}

//En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
let {Precio: Producto_Precio2}=Producto2;
let {Cantidad: Pedido_Cantidad}=Pedido;
let {SaldoActual: Cliente_SaldoActual}=Comprador;
let Costo_Compra=Producto_Precio2*Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra}`)

if(Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");
else
    console.log("El cliente tiene saldo insuficiente.");


//