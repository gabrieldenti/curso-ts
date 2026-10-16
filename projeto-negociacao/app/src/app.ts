import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form") as HTMLFormElement;
const botaoImportar = document.querySelector(
  "#botao-importa",
) as HTMLButtonElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});

botaoImportar.addEventListener("click", () => {
  controller.importarDados();
});
