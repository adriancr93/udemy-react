//Objetos

const product = {
    name : "Tablet",
    price : 300,
    available : false
}

// console.log(product);
// console.table(product)

// console.log(product.name)
// console.log(product.price)
// console.log(product.available)

//Destructuring

// const{ name, price, available } = product
// console.log(name)
// console.log(price)
// console.log(available)


// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible
// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// Object Literal Enhancement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)