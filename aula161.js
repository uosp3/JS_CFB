const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

btn_home.addEventListener("click", (evt) => {
  abriPagina(evt.target, "./aula161_home.html");
});
btn_novo.addEventListener("click", (evt) => {
  abriPagina(evt.target, "./aula161_novo.html");
});
btn_pesquisar.addEventListener("click", (evt) => {
  abriPagina(evt.target, "./aula161_pesquisar.html");
});
btn_gestao.addEventListener("click", (evt) => {
  abriPagina(evt.target, "./aula161_gestao.html");
});
btn_sobre.addEventListener("click", (evt) => {
  abriPagina(evt.target, "./aula161_sobre.html");
});

const abriPagina = (el, url) => {
  const abas = [...document.querySelectorAll(".aba")];
  abas.forEach((e) => {
    e.classList.remove("abaSelecionada");
  });
  el.classList.add("abaSelecionada");
  window.open(url, "if_principal");
};
