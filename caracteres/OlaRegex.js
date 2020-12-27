const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

let regex = /casa/gi
console.log(texto.match(regex))

console.log(texto.match(/casa/i))
console.log(texto.match(/a b/))