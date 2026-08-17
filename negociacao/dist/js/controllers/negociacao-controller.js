import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    InputData;
    InputQuantidade;
    InputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView("#negociacoes-view");
    constructor() {
        this.InputData = document.getElementById('data');
        this.InputQuantidade = document.getElementById('quantidade');
        this.InputValor = document.getElementById('valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegociacao() {
        const data = new Date();
        return new Negociacao(data, parseInt(this.InputQuantidade.value), parseFloat(this.InputValor.value));
    }
    limparFormulario() {
        this.InputData.value = '';
        this.InputQuantidade.value = '';
        this.InputValor.value = '';
        this.InputData.focus();
    }
}
