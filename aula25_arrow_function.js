const soma=(v1, v2)=>{return v1+v2}
console.log(soma(10,5));


const nome=n=>n //usando apenas um parâmetro não precisa do parentese e o "return é facultativo. ISTO NO CASO DA FUNCÃO TER APENAS UMA LINHA.
console.log(nome("Edson"));


//no caso abaixo é necessário os parêntes e o return.
const soma2=(v1,v2)=>{
    let res=v1+v2
    return res
}
console.log(soma2(10,8))