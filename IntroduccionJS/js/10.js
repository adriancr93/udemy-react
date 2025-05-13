const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
// tecnologias.push('Nest.js');

// const nuevoArreglo = [...tecnologias, 'Nest.js']
// console.table(tecnologias);

// console.table(nuevoArreglo);

// tecnologias.shift()
// console.table(tecnologias);

// const tecnologias2 = tecnologias.filter(function(tech) {
//     if (tech !== 'HTML') {
//         return tech
//     }
// })

// tecnologias[4] = 'Nest.js'
// console.log(tecnologias)

const tecnologias2 = tecnologias.map(function(tech) {
    if (tech === 'Node.js'){
        return 'Nest.js'
    } else {
        return tech
    }
})

console.log(tecnologias2)

