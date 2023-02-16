class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador('J1'),new Jogador('J2'),new Jogador('J3'),new Jogador('J4')]

let s1=jogadores[2].id //identificar o jogador pelo symbol

jogadores=jogadores.filter((j)=>{
    return j.id!=s1 //filtra e exclui o jogador 2
})

console.log(jogadores)