// Objetos - Destructuring de dos o mas objetos

const product = {
    nombre : "Tablet",
    precio : 300,
    available : false
}

const cliente  = {
    nombre : "Juan",
    premium : true,
    direccion : {
        calle : "Calle Mexico",
    }
}

const { nombre } = product
const { nombre: nombreCliente, direccion: { calle }} = cliente

console.log(nombre)
console.log(nombreCliente)

console.log(calle)