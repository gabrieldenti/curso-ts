import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
  InputData;
  InputQuantidade;
  InputValor;
  constructor() {
    this.InputData = document.getElementById("data");
    this.InputQuantidade = document.getElementById("quantidade");
    this.InputValor = document.getElementById("valor");
  }
  adiciona() {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    limparFormulario();
  }
  criaNegociacao() {
    return new Negociacao(
      new Date(this.InputData.value + "T00:00:00"),
      parseInt(this.InputQuantidade.value),
      parseFloat(this.InputValor.value),
    );
  }
  limparFormulario() {
    this.InputData.value = "";
    this.InputQuantidade.value = "";
    this.InputValor.value = "";
    this.InputData.focus();
  }
}
