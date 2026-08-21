import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
const botaoImportar = document.querySelector('#botao-importar');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
botaoImportar.addEventListener('click', () => {
    controller.importarDados();
});
