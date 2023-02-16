
const f=function(v1,v2){ //a funcão não tem nome (anonima)
    return v1+v2
}

console.log(f(10,5));

//separar aqui para rodar.

const f2=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(f2(10,15));

const f3=new Function("v1","v2","return v1+v2") //funcão construtor anônima.
//o terceiro parâmetro "return" é o corpo da funcão.
//OBS: vide F (maiúsculo)
console.log(f3(10,25))