import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    InputData;
    InputQuantidade;
    InputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView("#negociacoes-view");
    mensagemView = new MensagemView("#mensagem-view");
    constructor() {
        this.InputData = document.getElementById("data");
        this.InputQuantidade = document.getElementById("quantidade");
        this.InputValor = document.getElementById("valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
        this.limparFormulario();
    }
    criaNegociacao() {
        const data = new Date();
        return new Negociacao(data, parseInt(this.InputQuantidade.value), parseFloat(this.InputValor.value));
    }
    limparFormulario() {
        this.InputData.value = "";
        this.InputQuantidade.value = "";
        this.InputValor.value = "";
        this.InputData.focus();
    }
}
