import { contatos } from "./aula96_bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato, destinoDOM){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)       

        destinoDOM.innerHTML=''

        contatos.forEach((c, indice)=>{                     
            
            const btn=document.createElement('button')
            btn.setAttribute('id', 'btn_' + indice )
            const div=document.createElement('div')
            div.setAttribute('class', 'contato')
                btn.innerHTML='Remover'
                btn.addEventListener('click', (evt)=>{                                 
                    destinoDOM.innerHTML=''                    
                    contatos.splice(indice, 1)
                    contato.addContato(contatos, destinoDOM)
                })              

                if(c.nome!=undefined){
                const p_nome=document.createElement('p')
                p_nome.innerHTML=c.nome
                const p_telefone=document.createElement('p')
                p_telefone.innerHTML=c.telefone
                const p_email=document.createElement('p')
                p_email.innerHTML=c.email
                
                div.appendChild(p_nome)
                div.appendChild(p_telefone)
                div.appendChild(p_email)
                div.appendChild(btn)                                                     
                destinoDOM.appendChild(div)                
                }else{
                contatos.pop()
                }                            
            })
    }
}
export default contato