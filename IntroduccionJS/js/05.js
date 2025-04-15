// Objetos - Manipulacion

const product = {
    name : "Tablet",
    price : 300,
    available : false
}

// Object.freeze(product) // Congela el objeto, no se puede modificar
// Object.seal(product) // No se pueden añadir propiedades, pero si modificar las existentes

//Reescribir un valor
product.available = true

// Sino existe, lo va a añadir
product.image = "imagen.jpg"

// Eliminar una propiedad
delete product.price

console.log(product)