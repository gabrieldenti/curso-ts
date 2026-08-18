import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private InputData: HTMLInputElement;
  private InputQuantidade: HTMLInputElement;
  private InputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView: NegociacoesView = new NegociacoesView(
    "#negociacoes-view",
  );
  private mensagemView: MensagemView = new MensagemView("#mensagem-view");

  constructor() {
    this.InputData = document.getElementById("data") as HTMLInputElement;
    this.InputQuantidade = document.getElementById(
      "quantidade",
    ) as HTMLInputElement;
    this.InputValor = document.getElementById("valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const data = new Date();

    return new Negociacao(
      data,
      parseInt(this.InputQuantidade.value),
      parseFloat(this.InputValor.value),
    );
  }

  limparFormulario(): void {
    this.InputData.value = "";
    this.InputQuantidade.value = "";
    this.InputValor.value = "";
    this.InputData.focus();
  }
}
