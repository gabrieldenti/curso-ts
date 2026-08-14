import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private InputData: HTMLInputElement;
    private InputQuantidade: HTMLInputElement;
    private InputValor: HTMLInputElement;

    constructor(){
        this.InputData = document.getElementById('data') as HTMLInputElement;
        this.InputQuantidade = document.getElementById('quantidade') as HTMLInputElement;
        this.InputValor = document.getElementById('valor') as HTMLInputElement;
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }

    criaNegociacao(): Negociacao {
        return new Negociacao(
            new Date(this.InputData.value + 'T00:00:00'),
            parseInt(this.InputQuantidade.value),
            parseFloat(this.InputValor.value)
        );
    }

    limparFormulario(): void {
        this.InputData.value = '';
        this.InputQuantidade.value = '';
        this.InputValor.value = '';
        this.InputData.focus();
    }
}