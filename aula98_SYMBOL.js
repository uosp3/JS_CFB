const s1=Symbol() //tem um identificador único
const s2=Symbol() //parece igual à linha acima mas o sistema considera volores diferentes no retorno
const s3=Symbol.for('Edson')
const s4=Symbol.for('Edson')

console.log(s1)
console.log(s2)

console.log(s1==s2) //veja que vai retornar 'false', ou seja, não são iguais.
console.log(s3===s4) //nesse caso retorna 'true' porque a atribuição feito com .for fez a igualdade

console.log(Symbol.keyFor(s3))  // aqui será retornado o registrado global atribuido "Edson"
console.log(Symbol.keyFor(s1)) // retorna undefined