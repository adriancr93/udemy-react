// Evaluacion de corto circuito

const auth = true

if (40) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

auth && console.log('Usuario Autenticado') 