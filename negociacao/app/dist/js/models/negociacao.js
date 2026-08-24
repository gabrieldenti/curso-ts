export class Negociacao {
    data;
    quantidade;
    valor;
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValor() {
        return this.valor;
    }
    getVolume() {
        return this.quantidade * this.valor;
    }
    ehIgual(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear());
    }
    paraTexto() {
        return `
        Data:${this.data}
        Quantidade:${this.quantidade}
        Valor:${this.valor}
      `;
    }
    static criaNegociacao(dataString, quantidadeString, valorString) {
        return new Negociacao(new Date(dataString.replace(/-/g, ",")), parseInt(quantidadeString), parseFloat(valorString));
    }
}
//# sourceMappingURL=negociacao.js.map