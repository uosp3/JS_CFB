  import {Cxmsg} from './aula135_cxmsg.js'
  const config={
    cor:'#48f'
  }
  Cxmsg.config(config)

  const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")
  const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2")
  const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3")

  btn_mostrarcxmsg.addEventListener("click", () => {
    Cxmsg.mostrar('CFB Cursos', 'Curso de JavaScript')
  })
  btn_mostrarcxmsg2.addEventListener("click", () => {
    Cxmsg.mostrar('YouTube', 'Canal com cursos de programação')
  })
  btn_mostrarcxmsg3.addEventListener("click", () => {
    Cxmsg.mostrar('JavaScritp', 'Aula 136')
  })
