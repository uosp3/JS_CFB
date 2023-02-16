class Npc {
    static alerta=false //não é da instância, é da classe
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?'Sim':'Não')}`)
        console.log('...................')
    }
    static alertar=function(){ //a função não é da instância, é da classe
        Npc.alerta=true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alertar() //muda o status de alerta para todos npc(1,2 e 3)

npc1.info()
npc2.info()
npc3.info()