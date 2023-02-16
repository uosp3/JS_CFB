function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimo=function(){
        setTimeout(function() { //settimeout gera um atraso na execução, o tempo de atraso 2000
            console.log(this.nome)
            console.log(this.nota)
        }, 2000) //tempo de atraso 2 segundos
    }

    this.dados_arrow=function(){
        setTimeout(() => { //arrow function consegue contornar o problema e pegar os dados.
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
const al1=new aluno("Edson", 10)
al1.dados_anonimo() //aqui vai retornar undefined
al1.dados_arrow() //aqui vai retornar os dados(parâmetros) passados.