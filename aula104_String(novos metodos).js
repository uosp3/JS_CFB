let nome=new String('Edson Gomes dos Santos')

//true ou false = retorno
console.log(nome.startsWith('Eds')) //verifica se a string começa com o parâmetro
console.log(nome.endsWith('ntos')) //verifica se a string termina com o parâmetro
console.log(nome.includes('Go')) //verifica se a string tem o parâmetro

console.log(nome.repeat(3)) //repete a string quantas vezes for o parâmetro

console.log(nome.charCodeAt(0)) //codigo do caractere
console.log(nome.charCodeAt(1)) //codigo do caractere
console.log(nome.charCodeAt(2)) //codigo do caractere
console.log(nome.charCodeAt(3)) //codigo do caractere
console.log(nome.charCodeAt(4)) //codigo do caractere

console.log(String.fromCodePoint(69,100, 115, 111,110)) //letra do código

let nome_ts='Edson'
console.log(`Nome: ${nome_ts}`) //template string, concatena (usar crase)