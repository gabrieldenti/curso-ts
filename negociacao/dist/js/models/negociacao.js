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
}
