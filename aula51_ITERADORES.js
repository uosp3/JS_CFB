//ARQUIVO .JS EXECUTAR NO PLAY (run code)
const valores=[10,8,9,2]
const it_valores=valores[Symbol.iterator]()

console.log(valores) //mostra os elementos do array
console.log(it_valores.next())//mostra o primeiro elemento do array e 'done'=false
//as linhas abaixo vão mostrando os elementos seguintes e quando acaba o 'done' fica true
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

const texto='YouTube'
const it_texto=texto[Symbol.iterator]()
console.log(texto) //mostro o conteúdo 'YouTube'
console.log(it_texto.next())//mostra a primeira letra de 'YouTube', Y
//as linhas abaixo vão mostrando as letras seguintes e quando acaba o 'done' fica true
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

