// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
// print spread array
console.log(...texto.match(/C|ab/))
console.log(...texto.match(/c|ab/i))
console.log(...texto.match(/C|ab/gi)) 
