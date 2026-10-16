import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
const botaoImportar = document.querySelector("#botao-importa");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
botaoImportar.addEventListener("click", () => {
    controller.importarDados();
});
//# sourceMappingURL=app.js.map