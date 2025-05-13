const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript'];

// for(let i = 0; i < tecnologias.length; i++) {
//      console.log(tecnologias[i])
// }

// forEach

const arrayforEach = tecnologias.forEach(function(tech) {
     return tech
})

// map

const arrayMap = tecnologias.map(function(tech) {
     return tech
})

console.log(arrayforEach)
console.log(arrayMap)

// for ... of

for(let tech of tecnologias) {
     console.log(tech)
}