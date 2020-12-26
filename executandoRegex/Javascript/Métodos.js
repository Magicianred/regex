const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))
console.log(`Foi encontrada ${regexNove.exec(texto)} no índice ${regexNove.exec(texto).index}!`)

console.log()

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) // Encontra 
console.log(texto.search(regexLetras)) // Mostra o índice
console.log(texto.replace(regexLetras, 'Achei')) // Substitui
console.log(...texto.match(regexLetras).join(',').split(' ')) // Todos separados por vírgula
console.log(texto.split(regexLetras)) // Array split

