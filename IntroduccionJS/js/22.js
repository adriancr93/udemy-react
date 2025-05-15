// Optional chaining  (?)
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}

console.log(alumno.examenes?.examen1)

console.log('Despues del ALUMNO')

// Nullish coalescing operator (??)

const pagina = 10 ?? 1
console.log(pagina)
