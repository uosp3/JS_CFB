import { Cxmsg } from "./aula135_cxmsg.js"
const config = {
  cor: "#48f",
  tipo: "ok",
  textos: ["SIM", "NÃO"],
  comando_sn: () => {},
}

const fsim = () => {
  alert("Botão SIM pressionado")
}

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")
const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2")
const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3")

btn_mostrarcxmsg.addEventListener("click", () => {
  config.tipo = "ok"
  Cxmsg.mostrar(config, "CFB Cursos", "Curso de JavaScript")
})

btn_mostrarcxmsg2.addEventListener("click", () => {
  config.tipo = "sn"
  config.comando_sn = () => {fsim()}
  Cxmsg.mostrar(config, "YouTube", "Canal com cursos de programação")
})
btn_mostrarcxmsg3.addEventListener("click", () => {
  config.tipo = "sn"
  config.textos = ["OK", "CANCELA"]
  config.comando_sn = () => {}
  Cxmsg.mostrar(config, "JavaScritp", "Aula 136")
})
