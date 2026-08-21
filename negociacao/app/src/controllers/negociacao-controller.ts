import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { diasDaSemana } from "../enums/diasDaSemana.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export class NegociacaoController {
  private InputData: HTMLInputElement;
  private InputQuantidade: HTMLInputElement;
  private InputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView: NegociacoesView = new NegociacoesView(
    "#negociacoes-view",);
  private mensagemView: MensagemView = new MensagemView("#mensagem-view");

  constructor() {
    this.InputData = document.getElementById("data") as HTMLInputElement; // o 'as' explicito o tipo para o compilador
    this.InputQuantidade = document.getElementById(
      "quantidade",
    ) as HTMLInputElement;
    this.InputValor = document.getElementById("valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaNegociacao(
      this.InputData.value,
      this.InputQuantidade.value,
      this.InputValor.value,
    );
    if (
      negociacao.getData().getDay() > diasDaSemana.DOMINGO &&
      negociacao.getData().getDay() < diasDaSemana.SABADO
    ) {
      this.negociacoes.adiciona(negociacao);
      this.mensagemView.update("Negociação adicionada com sucesso!");
      this.limparFormulario();
      this.negociacoesView.update(this.negociacoes);
    } else {
      this.mensagemView.update(
        "Negociações só podem ser adicionadas em dias úteis!",
      );
    }
  }

  public importarDados(): void{
      fetch('http:')
  }

  private limparFormulario(): void {
    this.InputData.value = "";
    this.InputQuantidade.value = "";
    this.InputValor.value = "";
    this.InputData.focus();
  }
}
