// Objetos - Destructuring de dos o mas objetos

const product = {
    nombre : "Tablet",
    precio : 300,
    available : false
}

const cliente  = {
    nombre : "Juan",
    premium : true
}

// const carrito = {
//     cantidad: 1,
//     ...product  // Spread operator, se copian todas las propiedades del objeto product al objeto carrito
// }

const nuevoObjeto = {
    ...product,
    ...cliente
}

console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(product, cliente) // Se copian todas las propiedades del objeto product al objeto cliente
console.log(nuevoObjeto2); // Se modifica el objeto product, pero no el cliente