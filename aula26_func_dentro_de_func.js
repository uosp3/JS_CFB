const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)
            res+=v
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,15))
//os valores 10,5,15 são passados para SOMA(...valores), linha 1
//esses valores são repassados para a função SOMAR, linha 8
//a função SOMAR soma os valores em RES
//RES é retornado pela função SOMAR
//A funçao SOMAR foi chamada pela função SOMA, logo,  o resultado de SOMA é retornado.

// abaixo a função recebe um array e faz o spred(espalhamento)
valor=[13, 22, 15]
console.log(soma(...valor))