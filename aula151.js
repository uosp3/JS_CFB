import { Cxmsg } from "./aula151_cxmsg.js"

const callback_ok = () => {}

const callback_naook = () => {
  const config = {
    cor: "#800",
    tipo: "ok",
    textos: null,
    comando_sn: () => {},
  }
  Cxmsg.mostrar(
    config,
    "Erro",
    "Login não efetuado! Usuário ou senha incorretos"
  )
}

const configlogin = {
  cor: "048", // "048",
  img: "./logo2.png",
  endpoint: "https://loginv1.uosp3.repl.co",
}
Login.login(callback_ok, callback_naook, configlogin)
