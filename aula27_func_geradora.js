//tem o retorno adiado até se precise dele
function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

const itc=cores(); //iterador cores
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);


function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp=perguntas(); //iterador perguntas
console.log(itp.next().value);
console.log(itp.next('Edson').value);
console.log(itp.next('Futebol').value);

function* contador(){
    let i=0
    while (true){ //loop infinito
        yield i++
        if(i>5)
            break //forçar a parada do loop
    }
}
const itco=contador();
for(let c of itco){
    console.log(c)
}
