var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { diasDaSemana } from "../enums/diasDaSemana.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
export class NegociacaoController {
    InputData;
    InputQuantidade;
    InputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView("#negociacoes-view", true);
    mensagemView = new MensagemView("#mensagem-view");
    constructor() {
        this.InputData = document.getElementById("data");
        this.InputQuantidade = document.getElementById("quantidade");
        this.InputValor = document.getElementById("valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaNegociacao(this.InputData.value, this.InputQuantidade.value, this.InputValor.value);
        if (negociacao.getData().getDay() > diasDaSemana.DOMINGO &&
            negociacao.getData().getDay() < diasDaSemana.SABADO) {
            this.negociacoes.adiciona(negociacao);
            this.mensagemView.update("Negociação adicionada com sucesso!");
            this.limparFormulario();
            this.negociacoesView.update(this.negociacoes);
        }
        else {
            this.mensagemView.update("Negociações só podem ser adicionadas em dias úteis!");
        }
    }
    limparFormulario() {
        this.InputData.value = "";
        this.InputQuantidade.value = "";
        this.InputValor.value = "";
        this.InputData.focus();
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
