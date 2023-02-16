const pessoa={
    nome:'Edson',
    canal:'CFB Curso',
    curso:'JavaScript',
    aulas: {
        aula01:'introdução',
        aula02:'Variávies',
        aula03:'Condicional',
    }
}

// console.log(pessoa)
// console.log(pessoa.nome) 
// console.log(pessoa.aulas.aula01)

//converte literal para JSON
const s_json_pessoa=JSON.stringify(pessoa)

const string_pessoa='{"nome":"Edson","canal":"CFB Curso","curso":"JavaScript","aulas":{"aula01":"introdução","aula02":"Variávies","aula03":"Condicional"}}'

//converte JSON para literal
const o_json_pessoa=JSON.parse(string_pessoa)


console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)