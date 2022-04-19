// Array de productos a ofrecer
const productos = [
    {
        id: 1,
        categoria: "hamburguesa",
        nombre: "clasica",
        precio: 8,
        foto: "../images/clasica.jpeg"

    },
    {
        id: 2,
        categoria: "hamburguesa",
        nombre: "royal",
        precio: 10,
        foto: "../images/royal.jpeg"
    },
    {
        id: 3,
        categoria: "hamburguesa",
        nombre: "suprema",
        precio: 15,
        foto: "../images/suprema.jpeg"
    },
    {
        id: 4,
        categoria: "bebida",
        nombre: "coca cola",
        precio: 3,
        foto: "../images/coca-cola.jpeg"
    },
    {
        id: 5,
        categoria: "bebida",
        nombre: "pepsi",
        precio: 2,
        foto: "/images/pepsi.jpeg"
    },
    {
        id: 6,
        categoria: "bebida",
        nombre: "fanta",
        precio: 1.5,
        foto: "../images/fanta.jpeg"
    },
]


const contenedorProductos = document.querySelector(".contenedor-productos");
const carritoProductos = document.querySelector(".carrito-productos")
const tablaProductos = document.getElementById('tabla-carrito')
const productosCarrito = [];


// 

document.addEventListener('DOMContentLoaded', () => {
   
    mostrarProductos()

})

// Interactuamos con HTML desde Javascript sobre el DOM para agregar elementos:

function mostrarProductos() {

    productos.forEach(producto => {

        // Creacion de elementos: div-img-h2
        const divProducto = document.createElement('div');
        divProducto.classList.add('carta');

        const fotoProducto = document.createElement('img')
        fotoProducto.classList.add('pic');
        fotoProducto.src = producto.foto

        const tituloProducto = document.createElement('h2')
        tituloProducto.classList.add('title')
        tituloProducto.textContent = producto.nombre

        const precioProducto = document.createElement('h4')
        precioProducto.classList.add('precio')
        precioProducto.textContent = `Precio: ${producto.precio}$`

        const buttonProducto = document.createElement('button')
        buttonProducto.classList.add('btn-producto')
        buttonProducto.textContent = 'Agregar a Carrito'


        //Aplicamos el evento de clic en los botones de cada producto:
        buttonProducto.onclick = () => insertarCarrito(producto.id)  

        // Enlazamos los nodos hijos al padre
        divProducto.appendChild(fotoProducto)
        divProducto.appendChild(tituloProducto)
        divProducto.appendChild(precioProducto)
        divProducto.appendChild(buttonProducto)

        contenedorProductos.appendChild(divProducto)
        
    });
}

function insertarCarrito(id) {
    const productoInsertado = productos.find(producto => producto.id === id)
    
    productosCarrito.push(productoInsertado)
    
   verCarrito(productosCarrito)
}


function verCarrito(productosCarrito) {

    tablaProductos.innerHTML = ""


    // Implementamos una tabla para la visibilidad de los productos agregados.
    const trFila = document.createElement('tr');
    trFila.classList.add('tabla')
   
    const thElem1 = document.createElement('th');
    thElem1.textContent = 'PRODUCTO'
    const thElem2 = document.createElement('th');
    thElem2.textContent = 'PRECIO'

    
    trFila.appendChild(thElem1)
    trFila.appendChild(thElem2)
    tablaProductos.appendChild(trFila)

    // 
    
    let cuerpoTabla = document.createElement('tbody')

    //Iteramos los productos del nuevo array: productosCarrito, que se agregaron con el evento onclick para ser mostrados:
    productosCarrito.forEach(producto => {
        
        let fila = document.createElement('tr')

        let nombreData = document.createElement('td')
        nombreData.innerText = `${producto.categoria}  ${producto.nombre}`

        let precioData = document.createElement('td')
        precioData.innerText = `${producto.precio}$`

         // Enlazamos los nodos hijos al padre
        fila.appendChild(nombreData)
        fila.appendChild(precioData)
        cuerpoTabla.appendChild(fila)
        
    })
    tablaProductos.appendChild(cuerpoTabla)
    
}


